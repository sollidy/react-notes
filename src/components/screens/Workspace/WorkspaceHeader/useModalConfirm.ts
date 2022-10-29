import { Modal } from 'antd'
import { useCallback, useMemo } from 'react'

import { useDb } from '../../../../hooks/useDb'
import { useNotesContext } from '../../../../hooks/useNotesContext'

const { confirm } = Modal

export const useModalConfirm = () => {
  const { deleteNoteDb } = useDb()
  const { currentNoteId, setCurrentNoteId } = useNotesContext()

  const showDeleteConfirm = useCallback(() => {
    confirm({
      title: 'Are you sure delete this note?',
      content: 'It is unrevokable',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        if (currentNoteId) {
          deleteNoteDb(currentNoteId)
          setCurrentNoteId(undefined)
        }
      },
    })
  }, [currentNoteId, deleteNoteDb, setCurrentNoteId])

  return showDeleteConfirm
}
