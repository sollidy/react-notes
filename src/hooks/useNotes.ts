import { useEffect, useMemo, useState } from 'react'

import { useNoteIdDispatch, useNoteIdState } from '../context/noteId-context'
import { useSearchState } from '../context/search-context'

import { useDb } from './useDb'

function useNotes() {
  const { currentNoteId } = useNoteIdState()
  const { searchTerm } = useSearchState()
  const setNoteId = useNoteIdDispatch()
  const { getAllNotesDb } = useDb()
  console.log(searchTerm)

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
    if (!allNotes?.length) return
    if (currentNoteId === undefined || !!searchTerm)
      setNoteId({ type: 'update', payload: allNotes[0].id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNotes, setNoteId])

  return allNotes
}

export { useNotes }
