import { useEffect, useState } from 'react'

import { useDb } from './useDb'

export const useDataForContext = () => {
  const [current, setCurrent] = useState<number | undefined>(undefined)
  const [loadNotes, setLoadNotes] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { getAllNotes } = useDb()

  useEffect(() => {
    if (loadNotes) setFirstNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadNotes])

  useEffect(() => {
    if (!getAllNotes || getAllNotes.length <= 0) {
      setCurrent(undefined)
      setLoadNotes(false)
    } else setLoadNotes(true)
  }, [getAllNotes])

  const setFirstNote = () => {
    if (getAllNotes && getAllNotes.length > 0) setCurrent(getAllNotes[0].id)
    else setCurrent(undefined)
  }

  const setCurrentNoteId = (id: number) => {
    setCurrent(id)
  }

  const getCurrentNote = () => {
    return getAllNotes?.find((note) => note.id === current)
  }
  const getNotes = searchTerm
    ? getAllNotes?.filter((note) => note.text.includes(searchTerm))
    : getAllNotes

  const setSearch = (term: string) => {
    setSearchTerm(term)
  }

  return {
    currentNoteId: current,
    setCurrentNoteId,
    allNotes: getNotes,
    getCurrentNote,
    setFirstNote,
    setSearch,
  }
}
