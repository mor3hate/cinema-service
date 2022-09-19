import { FC } from 'react'
import Logo from './Logo'

import styles from './Header.module.scss'
import { time } from './timezone.data'
import Search from '../Sidebar/Search/Search'
import dynamic from 'next/dynamic'

const DynamicTimeZone = dynamic(() => import('./TimeZone'), { ssr: false })

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<DynamicTimeZone time={time} />
			<Search />
		</header>
	)
}

export default Header
