import { useEffect, useState } from 'react'

import { useDb } from './useDb'

export const useDataForContext = () => {
  const [current, setCurrent] = useState<number | undefined>(undefined)
  const { getAllNotes } = useDb()
  useEffect(() => {
    if (getAllNotes && getAllNotes.length > 0) setCurrent(getAllNotes[0].id)
    else setCurrent(undefined)
  }, [getAllNotes])

  const setFirstNote = () => {
    if (getAllNotes && getAllNotes.length > 0) setCurrent(getAllNotes[0].id)
    else setCurrent(undefined)
  }

  const setCurrentNoteId = (id: number) => {
    setCurrent(id)
  }

  return {
    currentNoteId: current,
    setCurrentNoteId,
    allNotes: getAllNotes,
  }
}
