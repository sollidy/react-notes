import { useEffect, useState } from 'react'

import { useDb } from './useDb'

export const useDataForContext = () => {
  const [currentId, setCurrentId] = useState<number | undefined>(undefined)
  const [isLoadedNotes, setIsLoadedNotes] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { getAllNotesDb } = useDb()

  // For first loading to set active note
  useEffect(() => {
    if (isLoadedNotes) setFirstNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadedNotes])

  // After delete last note to set id to undefined
  useEffect(() => {
    if (!getAllNotesDb || getAllNotesDb.length <= 0) {
      setCurrentId(undefined)
      setIsLoadedNotes(false)
    } else setIsLoadedNotes(true)
  }, [getAllNotesDb])

  //Only for deletion, to set new active note
  const setFirstNote = () => {
    if (getAllNotesDb && getAllNotesDb.length > 0)
      setCurrentId(getAllNotesDb[0].id)
    else setCurrentId(undefined)
  }

  const setCurrentNoteId = (id: number) => {
    setCurrentId(id)
  }

  const setSearch = (term: string) => {
    setSearchTerm(term)
  }

  const currentNote = getAllNotesDb?.find((note) => note.id === currentId)

  const allNotes = searchTerm
    ? getAllNotesDb?.filter((note) => note.text.includes(searchTerm))
    : getAllNotesDb

  return {
    currentNoteId: currentId,
    allNotes,
    currentNote,
    setCurrentNoteId,
    setFirstNote,
    setSearch,
  }
}
