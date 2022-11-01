import { createContext, useContext, useReducer } from 'react'

type Action =
  | { type: 'updateSearchTerm'; payload: string }
  | { type: 'updateNoteId'; payload: number | undefined }
type Dispatch = (action: Action) => void
type State = { currentNoteId: number | undefined; searchTerm: string }
type NotesProviderProps = { children: React.ReactNode }

const NotesStateContext = createContext<State | undefined>(undefined)
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
  const [{ currentNoteId, searchTerm }, dispatch] = useReducer(notesReducer, {
    currentNoteId: undefined,
    searchTerm: '',
  })
  return (
    <NotesStateContext.Provider value={{ currentNoteId, searchTerm }}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  )
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
