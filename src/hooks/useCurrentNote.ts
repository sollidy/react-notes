import { useEffect, useState } from 'react'

import { useNotesState } from '../context/notes-context'
import { Notes } from '../db/notes'

import { useDb } from './useDb'

export const useCurrentNote = () => {
  const { getCurrentNoteDb } = useDb()
  const { currentNoteId, allNotes } = useNotesState()

  const [currentNote, setCurrentNote] = useState<Notes | undefined>(undefined)

  useEffect(() => {
    async function getCurrentNote() {
      if (currentNoteId) {
        const current = await getCurrentNoteDb(currentNoteId)
        setCurrentNote(current)
      }
    }
    getCurrentNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNoteId, allNotes])

  return currentNote
}
