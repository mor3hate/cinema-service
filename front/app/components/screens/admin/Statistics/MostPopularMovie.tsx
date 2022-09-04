import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import cn from 'classnames'
import styles from '../Admin.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Link from 'next/link'
import { getMoviesUrl } from '@/config/api.config'
import Image from 'next/image'

const MostPopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		['get most popular movie to admin'],
		() => MovieService.getPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	return (
		<div className={cn(styles.block, styles.count_users)}>
			<p>The most popular movie</p>
			{isLoading ? (
				<div className='w-1/2'>
					<SkeletonLoader count={1} />
				</div>
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMoviesUrl(movie.slug)}>
							<a>
								<Image
									height={176}
									width={285}
									src={movie.bigPoster}
									alt={movie.title}
									className={styles.image}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default MostPopularMovie
