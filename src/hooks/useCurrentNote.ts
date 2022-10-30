import { useNoteIdState } from '../context/noteId-context'

import { useNotes } from './useNotes'

export const useCurrentNote = () => {
  const allNotes = useNotes()
  const { currentNoteId } = useNoteIdState()
  return allNotes?.find((note) => note.id === currentNoteId)
}
