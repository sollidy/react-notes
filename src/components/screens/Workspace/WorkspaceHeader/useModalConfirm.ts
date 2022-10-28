import { Modal } from 'antd'

import { useDb } from '../../../../hooks/useDb'
import { useNotesContext } from '../../../../hooks/useNotesContext'

const { confirm } = Modal

export const useModalConfirm = () => {
  const { deleteNoteDb } = useDb()
  const { currentNoteId, setFirstNote } = useNotesContext()

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this note?',
      content: 'It is unrevokable',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        if (currentNoteId) {
          deleteNoteDb(currentNoteId)
          setFirstNote()
        }
      },
    })
  }

  return showDeleteConfirm
}
