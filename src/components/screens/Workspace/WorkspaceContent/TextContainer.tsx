import { FC } from 'react'

import { useNotesContext } from '../../../../hooks/useNotesContext'
import { MDConverter } from '../../../../utils/MDConverter'
import { TextEdit } from '../../../ui/TextEdit/TextEdit'

interface ITextContainer {
  isEdit: boolean
}

export const TextContainer: FC<ITextContainer> = ({ isEdit }) => {
  const { allNotes, currentNoteId } = useNotesContext()

  const currentNote = allNotes?.filter((note) => note.id === currentNoteId)
  const currentNoteText =
    currentNote && currentNote?.length > 0 ? currentNote[0].text : ''

  return <>{isEdit ? <TextEdit /> : <MDConverter md={currentNoteText} />}</>
}
