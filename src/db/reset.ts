import { db } from '.'

export function resetDatabase() {
  return db.transaction('rw', db.tables, async () => {
    await Promise.all(db.tables.map((table) => table.clear()))
  })
}
