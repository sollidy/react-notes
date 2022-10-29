import { useContext } from 'react'

import { NotesContext } from '../providers/ContextProvider'

export const useNotesContext = () => {
  const { currentNoteId, allNotes, setCurrentNoteId, setSearch } =
    useContext(NotesContext)
  return {
    currentNoteId,
    allNotes,
    setCurrentNoteId,
    setSearch,
  }
}
