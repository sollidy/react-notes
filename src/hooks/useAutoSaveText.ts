import { useEffect } from 'react'

import { useDb } from './useDb'
import { useNotesContext } from './useNotesContext'

export const useAutoSaveText = (value: string) => {
  const { currentNoteId } = useNotesContext()
  const { editNote } = useDb()

  useEffect(() => {
    if (currentNoteId && value) {
      const currentId = currentNoteId
      editNote(currentId, value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}
