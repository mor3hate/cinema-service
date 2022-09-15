import Link from 'next/link'
import { FC } from 'react'
import { ITrendingItemProps } from './trending.interface'

import cn from 'classnames'
import styles from './Trending.module.scss'
import Image from 'next/image'

const TrendingItem: FC<ITrendingItemProps> = ({ trendingItem, variant }) => {
	return (
		<Link href={trendingItem.link}>
			<a
				className={cn(styles.item, {
					[styles.withText]: trendingItem.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical',
				})}
			>
				<Image
					alt={trendingItem.name}
					draggable={false}
					layout='fill'
					src={trendingItem.posterPath}
					priority
				/>
				{trendingItem.content && (
					<div className={styles.content}>
						<p className={styles.sub_content}> {trendingItem.content.title}</p>
					</div>
				)}
			</a>
		</Link>
	)
}

export default TrendingItem
