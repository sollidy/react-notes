import { useNotesState } from '../context/notes-context'

import { useDebounce } from './useDebounce'

export const useCurrentNote = () => {
  const { allNotes, currentNoteId } = useNotesState()

  return useDebounce(allNotes?.find((note) => note.id === currentNoteId))
}
