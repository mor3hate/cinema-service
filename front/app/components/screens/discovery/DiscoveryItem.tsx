import { getGenresUrl } from '@/config/api.config'
import Link from 'next/link'
import { FC } from 'react'
import { IDiscovery } from './discovery.interface'

import styles from './Discovery.module.scss'
import DiscoveryImage from './DiscoveryImage'

const DiscoveryItem: FC<{ collection: IDiscovery }> = ({ collection }) => {
	return (
		<Link href={`/genre/${collection.slug}`}>
			<a className={styles.collection}>
				<DiscoveryImage collection={collection} />

				<div className={styles.content}>
					<div className={styles.title}>{collection.title}</div>
				</div>

				<div className={`${styles.behind} ${styles.second}`}>
					<DiscoveryImage collection={collection} />
				</div>

				<div className={`${styles.behind} ${styles.third}`}>
					<DiscoveryImage collection={collection} />
				</div>
			</a>
		</Link>
	)
}

export default DiscoveryItem
