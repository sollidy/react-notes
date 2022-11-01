import { FC } from 'react'

import { useCurrentNote } from '../../../../../hooks/useCurrentNote'

import { TextEdit } from './TextEdit'
import { TextView } from './TextView'

interface ITextContainer {
  isEdit: boolean
}

export const TextContainer: FC<ITextContainer> = ({ isEdit }) => {
  const currentNote = useCurrentNote()
  if (!currentNote) return null

  return (
    <>
      {isEdit ? (
        <TextEdit currentNote={currentNote} />
      ) : (
        <TextView md={currentNote.text} />
      )}
    </>
  )
}
