import { Button, Layout, Modal } from 'antd'
import Search from 'antd/lib/input/Search'
import { FC } from 'react'

import { useDb } from '../../../../hooks/useDb'
import { useNotesContext } from '../../../../hooks/useNotesContext'

import styles from './WorkspaceHeader.module.scss'

const { Header } = Layout
const { confirm } = Modal

interface IWorkHeader {
  startEdit: () => void
  stopEdit: () => void
  isEdit: boolean
}

export const WorkspaceHeader: FC<IWorkHeader> = ({
  isEdit,
  startEdit,
  stopEdit,
}) => {
  const { currentNoteId, setFirstNote, setSearch } = useNotesContext()
  const { deleteNote } = useDb()

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this note?',
      content: 'It is unrevokable',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        if (currentNoteId) {
          deleteNote(currentNoteId)
          setFirstNote()
        }
      },
    })
  }

  return (
    <Header className={styles.header}>
      <div className={styles.workspaceHeader}>
        <div className={styles.buttons}>
          <Button onClick={startEdit} disabled={isEdit || !currentNoteId}>
            Edit Note
          </Button>
          <Button
            onClick={() => stopEdit()}
            disabled={!isEdit || !currentNoteId}
            type="primary"
          >
            Save
          </Button>
          <Button
            type="primary"
            onClick={showDeleteConfirm}
            danger
            disabled={!currentNoteId}
          >
            Delete
          </Button>
        </div>
        <div className={styles.search}>
          <Search
            allowClear
            disabled={!currentNoteId}
            placeholder="input search text"
            onSearch={(value) => setSearch(value)}
            enterButton
          />
        </div>
      </div>
    </Header>
  )
}
