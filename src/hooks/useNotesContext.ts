import { useContext } from 'react'

import { NotesContext } from '../providers/ContextProvider'

export const useNotesContext = () => {
  const { currentNoteId, allNotes, setCurrentNoteId } = useContext(NotesContext)
  return {
    currentNoteId,
    allNotes,
    setCurrentNoteId,
  }
}
