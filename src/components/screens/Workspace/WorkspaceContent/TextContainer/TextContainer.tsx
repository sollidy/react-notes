import { FC } from 'react'

import { useNotesContext } from '../../../../../hooks/useNotesContext'

import { TextEdit } from './TextEdit'
import { TextView } from './TextView'

interface ITextContainer {
  isEdit: boolean
}

export const TextContainer: FC<ITextContainer> = ({ isEdit }) => {
  const { getCurrentNote } = useNotesContext()
  const currentNote = getCurrentNote()
  if (!currentNote) return null

  return <>{isEdit ? <TextEdit /> : <TextView md={currentNote.text} />}</>
}
