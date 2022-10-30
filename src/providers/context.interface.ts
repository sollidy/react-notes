import { Notes } from '../db/notes'

export interface INotesContext {
  currentNoteId: number | undefined
  setCurrentNoteId: (id: number | undefined) => void
  allNotesOld: Notes[] | undefined
  setSearch: (term: string) => void
}
