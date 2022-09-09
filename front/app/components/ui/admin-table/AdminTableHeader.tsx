import { FC } from 'react'

import styles from './AdminTable.module.scss'
import cn from 'classnames'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.headerItem)}>
			{headerItems.map(item => (
				<div key={item}>{item}</div>
			))}
			<div>Actions</div>
		</div>
	)
}

export default AdminTableHeader
