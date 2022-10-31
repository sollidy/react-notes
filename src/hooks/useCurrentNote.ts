import { useNoteIdState } from '../context/noteId-context'

import { useDebounce } from './useDebounce'
import { useNotes } from './useNotes'

export const useCurrentNote = () => {
  const allNotes = useNotes()
  // console.log(allNotes)
  const { currentNoteId } = useNoteIdState()
  return useDebounce(allNotes?.find((note) => note.id === currentNoteId))
}
