import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'

import { db } from '../db'
import { Notes } from '../db/notes'

const initialNote = {
  title: 'New Title',
  text: 'New Note',
  createdAt: new Date(Date.now()),
}

export const useDb = (text: string, title: string) => {
  const [note, setNote] = useState<Notes>(initialNote)
  const createNote = () => {
    db.notes.add(note)
    setNote(initialNote)
  }

  const allNotes = useLiveQuery(() => db.notes?.toArray())

  return {
    allNotes,
    createNote,
  }
}
