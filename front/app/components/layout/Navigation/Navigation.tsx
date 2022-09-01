import dynamic from 'next/dynamic'
import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'

import styles from './Navigation.module.scss'

const DynamicAuthItems = dynamic(
	() => import('./MenuContainer/auth/AuthItems'),
	{ ssr: false }
)

const Navigation: FC = () => {
	return (
		<aside>
			<div className={styles.secondary}>
				<MenuContainer type='secondary' />
				<DynamicAuthItems />
			</div>
			<div className={styles.primary}>
				<MenuContainer type='primary' />
			</div>
		</aside>
	)
}

export default Navigation
