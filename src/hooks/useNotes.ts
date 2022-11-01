import { useEffect, useMemo } from 'react'

import { useNotesDispatch, useNotesState } from '../context/notes-context'

import { useDb } from './useDb'

export const useNotes = () => {
  const { getNotesDb } = useDb()
  const { searchTerm, currentNoteId } = useNotesState()
  const dispatch = useNotesDispatch()

  const notes = useMemo(() => {
    if (!getNotesDb?.length) return
    if (!searchTerm) return getNotesDb
    const filteredNotes = getNotesDb.filter((note) =>
      note.text.includes(searchTerm)
    )
    if (!filteredNotes.length) return
    return filteredNotes
  }, [getNotesDb, searchTerm])

  useEffect(() => {
    if (!notes?.length) return
    if (currentNoteId === undefined || !!searchTerm)
      dispatch({ type: 'updateNoteId', payload: notes[0].id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes])

  return notes
}
