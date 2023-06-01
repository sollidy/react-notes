import { App } from 'antd'
import { useCallback } from 'react'

import {
  useNotesDispatch,
  useNotesState,
} from '../../../../context/notes-context'
import { useDb } from '../../../../hooks/useDb'

export const useModalConfirm = () => {
  // console.log(globalThis.getSelection()!.rangeCount < 1)

  const { modal } = App.useApp()

  const { deleteNoteDb } = useDb()
  const { currentNoteId } = useNotesState()
  const dispatch = useNotesDispatch()

  const showDeleteConfirm = useCallback(() => {
    modal.confirm({
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
      onCancel() {},
    })
  }, [currentNoteId, deleteNoteDb, dispatch, modal])

  return showDeleteConfirm
}
