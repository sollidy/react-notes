import { db } from '.'

const initialNote = {
  title: 'New note',
  text: 'Sample text',
  createdAt: new Date(Date.now()),
}

export const populate = async () => {
  await db.notes.add(initialNote)
}
