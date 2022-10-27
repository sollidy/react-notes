import Dexie, { Table } from 'dexie'

import { Notes } from './notes'
import { populate } from './populate'

export class NotesDb extends Dexie {
  notes!: Table<Notes>

  constructor() {
    super('notesDb')
    this.version(2).stores({
      notes: '++id, title, text, createdAt',
    })
  }
}

export const db = new NotesDb()

db.on('populate', populate)
