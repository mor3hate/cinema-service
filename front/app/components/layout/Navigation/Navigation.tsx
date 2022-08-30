import { FC } from 'react'
import AuthItems from './MenuContainer/auth/AuthItems'
import MenuContainer from './MenuContainer/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<aside>
			<div className={styles.secondary}>
				<MenuContainer type='secondary' />
				<AuthItems />
			</div>
			<div className={styles.primary}>
				<MenuContainer type='primary' />
			</div>
		</aside>
	)
}

export default Navigation
