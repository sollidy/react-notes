import { Notes } from '../db/notes'

export interface INotesContext {
  currentNoteId: number | undefined
  setCurrentNoteId: (id: number) => void
  allNotes: Notes[] | undefined
  currentNote: Notes | undefined
  setFirstNote: () => void
  setSearch: (term: string) => void
}
