import { useLiveQuery } from 'dexie-react-hooks'

import { db } from '../db'
import { Notes } from '../db/notes'

export const useDb = () => {
  //work with indexDb
  const createNoteDb = async (
    text: string = '',
    title: string = 'New note'
  ) => {
    return await db.notes.add({
      text,
      title,
      createdAt: new Date(Date.now()),
    })
  }

  const editNoteDb = async (
    id: number,
    { text, title }: { text?: string; title?: string }
  ) => {
    if (text) {
      await db.notes.where({ id: id }).modify((n: Notes) => (n.text = text))
    }
    if (title) {
      await db.notes.where({ id: id }).modify((n: Notes) => (n.title = title))
    }
  }

  const deleteNoteDb = (id: number) => {
    db.notes.delete(id)
  }

  const getCurrentNoteDb = async (id: number) => {
    return await db.notes.get(id)
  }

  const getAllNotesDb = useLiveQuery(
    async () => await db.notes.reverse().toArray()
  )

  return {
    getCurrentNoteDb,
    getAllNotesDb,
    createNoteDb,
    editNoteDb,
    deleteNoteDb,
  }
}
