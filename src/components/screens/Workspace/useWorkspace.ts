import { useEffect, useState } from 'react'

import { useNotesContext } from '../../../hooks/useNotesContext'

export const useWorkspace = () => {
  const [isEdit, setIsEdit] = useState(false)
  const { currentNoteId } = useNotesContext()
  //stop edit mode after changing note
  useEffect(() => {
    setIsEdit(false)
  }, [currentNoteId])

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
  }
}
