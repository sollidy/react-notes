import { Button, Layout } from 'antd'
import Search from 'antd/lib/input/Search'
import { FC } from 'react'

import { useNotesContext } from '../../../../hooks/useNotesContext'

import styles from './WorkspaceHeader.module.scss'
import { useModalConfirm } from './useModalConfirm'

const { Header } = Layout

interface IWorkHeader {
  changeEditStatus: (status: 'view' | 'edit') => void
  isEdit: boolean
}

export const WorkspaceHeader: FC<IWorkHeader> = ({
  isEdit,
  changeEditStatus,
}) => {
  const { currentNoteId, setSearch } = useNotesContext()
  const showDeleteConfirm = useModalConfirm()

  return (
    <Header className={styles.header}>
      <div className={styles.workspaceHeader}>
        <div className={styles.buttons}>
          <Button
            onClick={() => changeEditStatus('edit')}
            disabled={isEdit || !currentNoteId}
          >
            Edit Note
          </Button>
          <Button
            onClick={() => changeEditStatus('view')}
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
