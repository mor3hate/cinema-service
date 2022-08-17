import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Navigation />
			<div className={styles.center_part}> {children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
