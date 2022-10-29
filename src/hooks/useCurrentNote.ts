import { useNotesContext } from './useNotesContext'

export const useCurrentNote = () => {
  const { allNotes, currentNoteId } = useNotesContext()
  const currentNote = allNotes?.find((note) => note.id === currentNoteId)
  return currentNote
}
