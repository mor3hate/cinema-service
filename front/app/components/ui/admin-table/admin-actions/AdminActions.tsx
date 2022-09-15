import { useRouter } from 'next/router'
import { FC } from 'react'
import AntIcon from '../../AntIcon'

import styles from './AdminActions.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	const confirmedDeleteHandler = () => {
		const confirmDelete = confirm('Do you really want to delete this element?')
		if (confirmDelete) {
			removeHandler()
		} else {
			return null
		}
	}

	return (
		<div className={styles.action}>
			<button onClick={() => push(editUrl)}>
				<AntIcon name='AiFillEdit' />
			</button>
			<button onClick={confirmedDeleteHandler}>
				<AntIcon name='AiFillDelete' />
			</button>
		</div>
	)
}

export default AdminActions
