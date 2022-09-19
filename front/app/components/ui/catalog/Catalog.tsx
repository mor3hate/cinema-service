import { getMoviesUrl } from '@/config/api.config'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Description from '../Description'
import TrendingItem from '../trending/TrendingItem'
import { ICatalog } from './catalog.interface'

import styles from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<div className='max-w-3xl mx-auto'>
				<h1 className={styles.heading}>{title}</h1>
				{description && (
					<Description text={description} className={styles.description} />
				)}

				<section className={styles.section}>
					{movies.map(movie => (
						<TrendingItem
							key={movie._id}
							trendingItem={{
								name: movie.title,
								link: getMoviesUrl(movie.slug),
								posterPath: movie.bigPoster,
								content: {
									title: movie.title,
								},
							}}
							variant='horizontal'
						/>
					))}
				</section>
			</div>
		</Meta>
	)
}

export default Catalog
