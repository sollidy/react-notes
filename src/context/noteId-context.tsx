import { createContext, useContext, useReducer } from 'react'

type Action =
  | { type: 'reset' }
  | { type: 'update'; payload: number | undefined }
type Dispatch = (action: Action) => void
type State = { currentNoteId: number | undefined }
type NoteIdProviderProps = { children: React.ReactNode }

const NoteIdStateContext = createContext<State | undefined>(undefined)
const NoteIdDispatchContext = createContext<Dispatch | undefined>(undefined)

function noteIdReducer(state: State, action: Action) {
  switch (action.type) {
    case 'reset': {
      return { currentNoteId: undefined }
    }
    case 'update': {
      return { currentNoteId: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function NoteIdProvider({ children }: NoteIdProviderProps) {
  const [state, dispatch] = useReducer(noteIdReducer, {
    currentNoteId: undefined,
  })
  return (
    <NoteIdStateContext.Provider value={state}>
      <NoteIdDispatchContext.Provider value={dispatch}>
        {children}
      </NoteIdDispatchContext.Provider>
    </NoteIdStateContext.Provider>
  )
}

function useNoteIdState() {
  const context = useContext(NoteIdStateContext)
  if (context === undefined) {
    throw new Error('useNoteIdState must be used within a NoteIdStateContext')
  }
  return context
}

function useNoteIdDispatch() {
  const context = useContext(NoteIdDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useNoteIdDispatch must be used within a NoteIdDispatchContext'
    )
  }
  return context
}

export { NoteIdProvider, useNoteIdState, useNoteIdDispatch }
