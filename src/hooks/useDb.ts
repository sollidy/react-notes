import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'

import { db } from '../db'
import { Notes } from '../db/notes'

const initialNote = {
  title: 'New title',
  text: '',
  createdAt: new Date(Date.now()),
}

export const useDb = () => {
  const [note, setNote] = useState<Notes>(initialNote)

  const createNote = (text: string = '', title: string = 'New title') => {
    db.notes.add({ ...note, text, title })
    setNote(initialNote)
  }

  const editNote = (id: number, text: string, title?: string) => {
    db.notes.where({ id: id }).modify((n: Notes) => (n.text = text))
    if (!title) return
    db.notes.where({ id: id }).modify((n: Notes) => (n.title = title))
  }

  const deleteNote = (id: number) => {
    db.notes.delete(id)
  }

  const getAllNotes = useLiveQuery(() => db.notes?.toArray())

  return {
    getAllNotes,
    createNote,
    editNote,
    deleteNote,
  }
}
