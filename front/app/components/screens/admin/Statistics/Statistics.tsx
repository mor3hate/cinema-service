import { FC } from 'react'

import styles from '../Admin.module.scss'
import CountUsers from './CountUsers'
import MostPopularMovie from './MostPopularMovie'

const Statistics: FC = () => {
	return (
		<div className={styles.stats}>
			<CountUsers />
			<MostPopularMovie />
		</div>
	)
}

export default Statistics
