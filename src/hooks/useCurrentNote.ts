import { useEffect, useState } from 'react'

import { useNotesState } from '../context/notes-context'
import { Notes } from '../db/notes'

import { useDb } from './useDb'
import { useNotes } from './useNotes'

export const useCurrentNote = () => {
  const { getCurrentNoteDb } = useDb()
  const { currentNoteId } = useNotesState()
  const notes = useNotes()

  const [currentNote, setCurrentNote] = useState<Notes | undefined>(undefined)

  useEffect(() => {
    async function getCurrentNote() {
      if (currentNoteId) {
        const current = await getCurrentNoteDb(currentNoteId)
        setCurrentNote(current)
      }
    }
    getCurrentNote()
  }, [currentNoteId, notes, getCurrentNoteDb])

  return currentNote
}
