import { FC } from 'react'
import Logo from './Logo'

import styles from './Header.module.scss'
import TimeZone from './TimeZone'
import { time } from './timezone.data'
import Search from '../Sidebar/Search/Search'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<TimeZone time={time} />
			<Search />
		</header>
	)
}

export default Header
