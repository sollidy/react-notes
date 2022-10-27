import { useState } from 'react'

export const useWorkspace = () => {
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
  }
}
