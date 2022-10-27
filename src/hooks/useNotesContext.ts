import { useContext } from 'react'

import { NotesContext } from '../providers/ContextProvider'

export const useNotesContext = () => {
  const {
    currentNoteId,
    allNotes,
    setCurrentNoteId,
    getCurrentNote,
    setFirstNote,
  } = useContext(NotesContext)
  return {
    currentNoteId,
    allNotes,
    setCurrentNoteId,
    getCurrentNote,
    setFirstNote,
  }
}