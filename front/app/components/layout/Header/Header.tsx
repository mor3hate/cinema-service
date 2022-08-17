import { FC } from 'react'
import Logo from './Logo'

import styles from './Header.module.scss'
import TimeZone from './TimeZone'
import { time } from './timezone.data'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<TimeZone time={time} />
			<div>search</div>
		</header>
	)
}

export default Header
