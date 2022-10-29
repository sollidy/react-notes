import { Notes } from '../db/notes'

export interface INotesContext {
  currentNoteId: number | undefined
  setCurrentNoteId: (id: number | undefined) => void
  allNotes: Notes[] | undefined
  currentNote: Notes | undefined
  setSearch: (term: string) => void
}
