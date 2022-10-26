import { useState } from 'react'

export const useWorkspace = () => {
  const [isEdit, setIsEdit] = useState(false)
  const beginEdit = () => {
    setIsEdit(true)
  }
  const stopEdit = () => {
    setIsEdit(false)
  }
  return {
    isEdit,
    beginEdit,
    stopEdit,
  }
}
