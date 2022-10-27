import { Layout } from 'antd'
import { FC } from 'react'

import { useNotesContext } from '../../../hooks/useNotesContext'

import { WorkspaceContent } from './WorkspaceContent'
import { WorkspaceHeader } from './WorkspaceHeader'
import { useWorkspace } from './useWorkspace'

const { Footer } = Layout

export const Workspace: FC = () => {
  const { isEdit, startEdit, stopEdit } = useWorkspace()
  const { currentNoteId } = useNotesContext()

  // console.log('NoteText', noteText)
  // console.log('DbNotes', allNotes)
  console.log('currentNoteId', currentNoteId)

  return (
    <>
      <WorkspaceHeader
        isEdit={isEdit}
        startEdit={startEdit}
        stopEdit={stopEdit}
      />
      <WorkspaceContent isEdit={isEdit} />

      <Footer style={{ textAlign: 'center' }}>©2018 Created by</Footer>
    </>
  )
}
