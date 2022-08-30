import AntIcon from '@/components/ui/AntIcon'
import { FC } from 'react'
import MovieContainer from './MovieContainer/MovieContainer'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<h2>
				Let's Have a Fun!
				<AntIcon name='AiOutlineArrowRight' />
			</h2>
			<p>Like a Nice Party for This Night?</p>
			<p>Let's go!</p>
			<MovieContainer />
		</aside>
	)
}

export default Sidebar
