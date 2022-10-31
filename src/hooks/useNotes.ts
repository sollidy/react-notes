import { useEffect, useState } from 'react'

import { Notes } from '../db/notes'

import { useDb } from './useDb'

export const useNotes = () => {
  const { getNotesDb } = useDb()
  const notes = getNotesDb

  return notes
}
