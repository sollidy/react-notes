import { Modal } from 'antd'
import { useCallback, useMemo } from 'react'

import {
  useNoteIdDispatch,
  useNoteIdState,
} from '../../../../context/noteId-context'
import { useDb } from '../../../../hooks/useDb'

const { confirm } = Modal

export const useModalConfirm = () => {
  const { deleteNoteDb } = useDb()

  const { currentNoteId } = useNoteIdState()
  const setNoteId = useNoteIdDispatch()

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
          setNoteId({ type: 'reset' })
        }
      },
    })
  }, [currentNoteId, deleteNoteDb, setNoteId])

  return showDeleteConfirm
}
