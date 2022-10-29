import { useEffect, useMemo, useState } from 'react'

import { useDb } from './useDb'

export const useDataForContext = () => {
  const [currentId, setCurrentId] = useState<number | undefined>(undefined)
  const [searchTerm, setSearchTerm] = useState('')
  const { getAllNotesDb } = useDb()

  useEffect(() => {
    if (!getAllNotesDb || getAllNotesDb.length < 1) {
      setCurrentId(undefined)
    } else {
      setCurrentId(getAllNotesDb[0].id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAllNotesDb?.length])

  const setCurrentNoteId = (id: number | undefined) => {
    setCurrentId(id)
  }

  const setSearch = (term: string) => {
    setSearchTerm(term)
  }

  const currentNote = getAllNotesDb?.find((note) => note.id === currentId)

  const allNotes = useMemo(() => {
    if (!searchTerm) return getAllNotesDb
    const filteredNotes = getAllNotesDb?.filter((note) =>
      note.text.includes(searchTerm)
    )
    if (!filteredNotes || filteredNotes.length < 1) {
      setCurrentId(undefined)
      return
    }
    setCurrentId(filteredNotes[0].id)
    return filteredNotes
  }, [getAllNotesDb, searchTerm])

  return {
    currentNoteId: currentId,
    allNotes,
    currentNote,
    setCurrentNoteId,
    setSearch,
  }
}
