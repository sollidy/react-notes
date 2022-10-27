import { useContext, useState } from 'react'

import { NotesContext } from '../../../providers/ContextProvider'

export const useWorkspace = () => {
  const { currentNoteId, allNotes, setCurrentNoteId } = useContext(NotesContext)
  const [isEdit, setIsEdit] = useState(false)
  const startEdit = () => {
    setIsEdit(true)
  }
  const stopEdit = () => {
    setIsEdit(false)
  }

  return {
    isEdit,
    startEdit,
    stopEdit,
    currentNoteId,
    allNotes,
    setCurrentNoteId,
  }
}
