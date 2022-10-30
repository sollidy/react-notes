import { useContext } from 'react'

import { NotesContext } from '../providers/ContextProvider'

export const useNotesContext = () => {
  const { currentNoteId, allNotesOld, setCurrentNoteId, setSearch } =
    useContext(NotesContext)
  return {
    currentNoteId,
    allNotesOld,
    setCurrentNoteId,
    setSearch,
  }
}
