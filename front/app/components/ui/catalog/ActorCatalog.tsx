import { getActorsUrl } from '@/config/api.config'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Description from '../Description'
import TrendingItem from '../trending/TrendingItem'
import { IActorCatalog } from './catalog.interface'

import styles from './Catalog.module.scss'

const Catalog: FC<IActorCatalog> = ({ actors, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<div className='max-w-3xl mx-auto'>
				<h1 className={styles.heading}>{title}</h1>
				{description && (
					<Description text={description} className={styles.description} />
				)}

				<section className={styles.section}>
					{actors.map(actor => (
						<TrendingItem
							key={actor._id}
							trendingItem={{
								name: actor.name,
								link: getActorsUrl(actor.slug),
								posterPath: actor.photo,
								content: {
									title: actor.name,
								},
							}}
							variant='vertical'
						/>
					))}
				</section>
			</div>
		</Meta>
	)
}

export default Catalog
