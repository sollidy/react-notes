import { useEffect } from 'react'

import { useNotesState } from '../context/notes-context'

import { useDb } from './useDb'

export const useAutoSaveText = (value: string) => {
  const { currentNoteId } = useNotesState()
  const { editNoteDb } = useDb()

  useEffect(() => {
    if (currentNoteId && value) {
      editNoteDb(currentNoteId, { text: value })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}
