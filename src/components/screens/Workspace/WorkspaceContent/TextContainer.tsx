import { FC } from 'react'

import { useNotesContext } from '../../../../hooks/useNotesContext'
import { MDConverter } from '../../../../utils/MDConverter'
import { TextEdit } from '../../../ui/TextEdit/TextEdit'

interface ITextContainer {
  isEdit: boolean
}

export const TextContainer: FC<ITextContainer> = ({ isEdit }) => {
  const { getCurrentNote } = useNotesContext()
  const currentNote = getCurrentNote()
  if (!currentNote) return null

  return <>{isEdit ? <TextEdit /> : <MDConverter md={currentNote.text} />}</>
}
