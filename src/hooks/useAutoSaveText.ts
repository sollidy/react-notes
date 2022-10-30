import { useEffect } from 'react'

import { useNoteIdState } from '../context/noteId-context'

import { useDb } from './useDb'

export const useAutoSaveText = (value: string) => {
  const { currentNoteId } = useNoteIdState()
  const { editNoteDb } = useDb()

  useEffect(() => {
    if (currentNoteId && value) {
      editNoteDb(currentNoteId, value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}
