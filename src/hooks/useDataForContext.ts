import { useCallback, useEffect, useMemo, useState } from 'react'

import { useDb } from './useDb'

export const useDataForContext = () => {
  const [currentId, setCurrentId] = useState<number | undefined>(undefined)
  const [searchTerm, setSearchTerm] = useState('')
  const { getAllNotesDb } = useDb()

  const allNotes = useMemo(() => {
    if (!getAllNotesDb?.length) return
    if (!searchTerm) return getAllNotesDb
    const filteredNotes = getAllNotesDb.filter((note) =>
      note.text.includes(searchTerm)
    )
    if (!filteredNotes.length) return
    return filteredNotes
  }, [getAllNotesDb, searchTerm])

  useEffect(() => {
    if (!allNotes?.length) {
      setCurrentId(undefined)
    } else {
      if (currentId === undefined || !!searchTerm) setCurrentId(allNotes[0].id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNotes?.length, searchTerm])

  const setCurrentNoteId = useCallback((id: number | undefined) => {
    setCurrentId(id)
  }, [])

  const setSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  return {
    currentNoteId: currentId,
    allNotes,
    setCurrentNoteId,
    setSearch,
  }
}
