import { useContext } from 'react'

import { NotesContext } from '../providers/ContextProvider'

export const useNotesContext = () => {
  const { setSearch } = useContext(NotesContext)
  return {
    setSearch,
  }
}
