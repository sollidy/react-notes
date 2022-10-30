import { DeleteTwoTone, EditOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import Search from 'antd/lib/input/Search'
import { FC } from 'react'

import { useNoteIdState } from '../../../../context/noteId-context'
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
  const { setSearch } = useNotesContext()

  const { currentNoteId } = useNoteIdState()
  const showDeleteConfirm = useModalConfirm()

  return (
    <Header className={styles.header}>
      <div className={styles.workspaceHeader}>
        <div className={styles.buttons}>
          <Button
            title="Edit note"
            icon={<EditOutlined />}
            onClick={() => changeEditStatus('edit')}
            disabled={isEdit || !currentNoteId}
          >
            Edit Note
          </Button>
          <Button
            title="Save note"
            type="primary"
            icon={<SaveOutlined />}
            onClick={() => changeEditStatus('view')}
            disabled={!isEdit || !currentNoteId}
          />
          <Button
            title="Delete note"
            icon={<DeleteTwoTone twoToneColor={'red'} />}
            danger
            onClick={showDeleteConfirm}
            disabled={!currentNoteId}
          />
        </div>
        <div className={styles.search}>
          <Search
            allowClear
            disabled={isEdit}
            placeholder="search notes"
            onSearch={setSearch}
            enterButton
          />
        </div>
      </div>
    </Header>
  )
}
