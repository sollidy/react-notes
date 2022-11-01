import { useCallback, useEffect, useState } from 'react'

import { useNotesState } from '../../../context/notes-context'

export const useEditSwitch = () => {
  const [isEdit, setIsEdit] = useState(false)

  const { currentNoteId } = useNotesState()

  //stop edit mode after changing note
  useEffect(() => {
    setIsEdit(false)
  }, [currentNoteId])

  const changeEditStatus = useCallback((status: 'edit' | 'view') => {
    if (status === 'edit') setIsEdit(true)
    else setIsEdit(false)
  }, [])

  return {
    isEdit,
    changeEditStatus,
  }
}
