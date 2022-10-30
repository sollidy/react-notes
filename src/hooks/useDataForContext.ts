import { useCallback, useEffect, useMemo, useState } from 'react'

import { useDb } from './useDb'

export const useDataForContext = () => {
  const [currentId, setCurrentId] = useState<number | undefined>(undefined)
  const [searchTerm, setSearchTerm] = useState('')

  const allNotesOld = undefined

  const setCurrentNoteId = useCallback((id: number | undefined) => {
    setCurrentId(id)
  }, [])

  const setSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  return {
    currentNoteId: currentId,
    allNotesOld,
    setCurrentNoteId,
    setSearch,
  }
}
