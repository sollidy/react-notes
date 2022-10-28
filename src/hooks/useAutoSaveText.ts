import { useEffect } from 'react'

import { useDb } from './useDb'
import { useNotesContext } from './useNotesContext'

export const useAutoSaveText = (value: string) => {
  const { currentNoteId } = useNotesContext()
  const { editNoteDb } = useDb()

  useEffect(() => {
    if (currentNoteId && value) {
      editNoteDb(currentNoteId, value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}
