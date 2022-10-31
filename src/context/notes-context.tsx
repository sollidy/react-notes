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
type NotesProviderProps = { children: React.ReactNode }
type NotesState = State & {
  allNotes: Notes[] | undefined
  currentNote: Notes | undefined
}

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

function NotesProvider({ children }: NotesProviderProps) {
  const { allNotes, currentNoteId, currentNote, searchTerm, dispatch } =
    useNotesData()
  return (
    <NotesStateContext.Provider
      value={{ currentNoteId, searchTerm, allNotes, currentNote }}
    >
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

  const currentNote = useMemo(
    () => allNotes?.find((note) => note.id === currentNoteId),
    [allNotes, currentNoteId]
  )

  useEffect(() => {
    if (!allNotes?.length) return
    if (currentNoteId === undefined || !!searchTerm)
      dispatch({ type: 'updateNoteId', payload: allNotes[0].id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNotes])

  return { allNotes, currentNote, currentNoteId, searchTerm, dispatch }
}

function useNotesState() {
  const context = useContext(NotesStateContext)
  if (context === undefined) {
    throw new Error('useNotesState must be used within a NotesStateContext')
  }
  return context
}

function useNotesDispatch() {
  const context = useContext(NotesDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useNotesDispatch must be used within a NotesDispatchContext'
    )
  }
  return context
}

export { NotesProvider, useNotesState, useNotesDispatch }
