import { FC } from 'react'
import { navItems } from './admin-navigation.data'

import styles from './AdminNavigation.module.scss'
import AdminNavItem from './AdminNavItem'

const AdminNavigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{navItems.map(item => (
					<AdminNavItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
