import { FC } from 'react'
import { ITrendingItem } from './trending.interface'

import styles from './Trending.module.scss'
import TrendingItem from './TrendingItem'

const Trending: FC<{ items: ITrendingItem[] }> = ({ items }) => {
	return (
		<div className={styles.trending_parent}>
			{items.map(item => (
				<TrendingItem trendingItem={item} variant='vertical' key={item.link} />
			))}
		</div>
	)
}

export default Trending
