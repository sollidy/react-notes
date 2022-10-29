import { useNotesContext } from './useNotesContext'

export const useCurrentNote = () => {
  const { allNotes, currentNoteId } = useNotesContext()
  return allNotes?.find((note) => note.id === currentNoteId)
}
