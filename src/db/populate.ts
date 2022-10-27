import { db } from '.'

const initialNote = {
  title: 'New title',
  text: '',
  createdAt: new Date(Date.now()),
}

export const populate = async () => {
  await db.notes.add(initialNote)
}
