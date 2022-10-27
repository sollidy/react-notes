import Dexie, { Table } from 'dexie'

import { Notes } from './notes'

export class NotesDb extends Dexie {
  notes!: Table<Notes>

  constructor() {
    super('notesDb')
    this.version(2).stores({
      notes: '++id, title, text, createdAt', // Primary key and indexed props
    })
  }
}

export const db = new NotesDb()

export function resetDatabase() {
  return db.transaction('rw', db.tables, async () => {
    await Promise.all(db.tables.map((table) => table.clear()))
  })
}
