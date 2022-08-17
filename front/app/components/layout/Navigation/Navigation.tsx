import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<aside>
			<div className={styles.secondary}>Hey</div>
			<div className={styles.primary}>
				<MenuContainer />
			</div>
		</aside>
	)
}

export default Navigation
