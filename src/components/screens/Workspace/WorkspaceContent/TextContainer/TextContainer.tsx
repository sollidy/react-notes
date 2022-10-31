import { FC } from 'react'

import { useNotesState } from '../../../../../context/notes-context'

import { TextEdit } from './TextEdit'
import { TextView } from './TextView'

interface ITextContainer {
  isEdit: boolean
}

export const TextContainer: FC<ITextContainer> = ({ isEdit }) => {
  const { currentNote } = useNotesState()

  if (!currentNote) return null

  return <>{isEdit ? <TextEdit /> : <TextView md={currentNote.text} />}</>
}
