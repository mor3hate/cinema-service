import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { IDiscovery } from './discovery.interface'

import styles from './Discovery.module.scss'
import DiscoveryItem from './DiscoveryItem'

const Discovery: FC<{ collection: IDiscovery[] }> = ({ collection }) => {
	return (
		<Meta title='Discovery' description='Get all collections to watch'>
			<div className='mx-auto' style={{ maxWidth: '850px' }}>
				<h1 className='text-2xl font-semibold mt-12 mb-5'>Discovery</h1>
				<section className={styles.collections}>
					{collection.map(item => (
						<DiscoveryItem collection={item} key={item._id} />
					))}
				</section>
			</div>
		</Meta>
	)
}

export default Discovery
