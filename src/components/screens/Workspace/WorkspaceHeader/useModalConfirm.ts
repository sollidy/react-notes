import { Modal } from 'antd'
import { useCallback, useMemo } from 'react'

import {
  useNotesDispatch,
  useNotesState,
} from '../../../../context/notes-context'
import { useDb } from '../../../../hooks/useDb'

const { confirm } = Modal

export const useModalConfirm = () => {
  const { deleteNoteDb } = useDb()

  const { currentNoteId } = useNotesState()
  const dispatch = useNotesDispatch()

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

          dispatch({ type: 'updateNoteId', payload: undefined })
        }
      },
    })
  }, [currentNoteId, deleteNoteDb, dispatch])

  return showDeleteConfirm
}
