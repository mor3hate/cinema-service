import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import FavoriteItem from './FavoriteItem'
import { useFavorites } from './useFavorites'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	return (
		<Meta title='Favorites' description='Watch your favorite movies now!'>
			<div className={styles.favorites_wrapper}>
				<h1 className='text-2xl font-semibold mt-12 mb-5'>
					Your favorites list
				</h1>
				<section className={styles.favorites}>
					{isLoading ? (
						<SkeletonLoader
							count={3}
							className={styles.skeletonLoader}
							containerClassName={styles.containerLoader}
						/>
					) : (
						favoriteMovies?.map(m => <FavoriteItem movie={m} key={m._id} />)
					)}
				</section>
			</div>
		</Meta>
	)
}

export default Favorites
