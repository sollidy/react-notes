import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

import { Notes } from '../db/notes'
import { useDb } from '../hooks/useDb'

type Action =
  | { type: 'updateSearchTerm'; payload: string }
  | { type: 'updateNoteId'; payload: number | undefined }
type Dispatch = (action: Action) => void
type State = { currentNoteId: number | undefined; searchTerm: string }
type NoteIdProviderProps = { children: React.ReactNode }
type NotesState = State & { allNotes: Notes[] | undefined }

const NotesStateContext = createContext<NotesState | undefined>(undefined)
const NotesDispatchContext = createContext<Dispatch | undefined>(undefined)

function notesReducer(state: State, action: Action) {
  switch (action.type) {
    case 'updateSearchTerm': {
      return {
        ...state,
        searchTerm: action.payload,
      }
    }
    case 'updateNoteId': {
      return {
        ...state,
        currentNoteId: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function NoteIdProvider({ children }: NoteIdProviderProps) {
  const { allNotes, currentNoteId, searchTerm, dispatch } = useNotesData()
  return (
    <NotesStateContext.Provider value={{ currentNoteId, searchTerm, allNotes }}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  )
}

function useNotesData() {
  const [{ currentNoteId, searchTerm }, dispatch] = useReducer(notesReducer, {
    currentNoteId: undefined,
    searchTerm: '',
  })
  const { getAllNotesDb } = useDb()

  const allNotes = useMemo(() => {
    if (!getAllNotesDb?.length) return
    if (!searchTerm) return getAllNotesDb
    const filteredNotes = getAllNotesDb.filter((note) =>
      note.text.includes(searchTerm)
    )
    if (!filteredNotes.length) return
    return filteredNotes
  }, [getAllNotesDb, searchTerm])

  useEffect(() => {
    if (!allNotes?.length) return
    if (currentNoteId === undefined || !!searchTerm)
      dispatch({ type: 'updateNoteId', payload: allNotes[0].id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNotes])

  return { allNotes, currentNoteId, searchTerm, dispatch }
}

function useNotesState() {
  const context = useContext(NotesStateContext)
  if (context === undefined) {
    throw new Error('useNoteIdState must be used within a NoteIdStateContext')
  }
  return context
}

function useNotesDispatch() {
  const context = useContext(NotesDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useNoteIdDispatch must be used within a NoteIdDispatchContext'
    )
  }
  return context
}

export { NoteIdProvider, useNotesState, useNotesDispatch }
