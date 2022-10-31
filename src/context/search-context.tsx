import { createContext, useContext, useReducer } from 'react'

type Action = { type: 'reset' } | { type: 'update'; payload: string }
type Dispatch = (action: Action) => void
type State = { searchTerm: string }
type SearchProviderProps = { children: React.ReactNode }

const SearchStateContext = createContext<State | undefined>(undefined)
const SearchDispatchContext = createContext<Dispatch | undefined>(undefined)

function searchReducer(state: State, action: Action) {
  switch (action.type) {
    case 'reset': {
      return { searchTerm: '' }
    }
    case 'update': {
      return { searchTerm: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function SearchProvider({ children }: SearchProviderProps) {
  const [state, dispatch] = useReducer(searchReducer, {
    searchTerm: '',
  })
  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  )
}

function useSearchState() {
  const context = useContext(SearchStateContext)
  if (context === undefined) {
    throw new Error('useSearchState must be used within a SearchStateContext')
  }
  return context
}

function useSearchDispatch() {
  const context = useContext(SearchDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useSearchDispatch must be used within a SearchDispatchContext'
    )
  }
  return context
}

export { SearchProvider, useSearchState, useSearchDispatch }
