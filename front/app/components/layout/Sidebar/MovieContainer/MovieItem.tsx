import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.movie_item}>
			<Link href={getMoviesUrl(movie.slug)}>
				<div className={styles.circle_wrapper}>
					<div className={styles.circle}></div>
					<a className={styles.content}>
						<Image
							height={80}
							width={80}
							className='rounded-full overflow-hidden'
							src={movie.poster}
							alt={movie.title}
							objectFit='cover'
							priority
						></Image>
					</a>
				</div>
			</Link>
			<Link href={getMoviesUrl(movie.slug)}>
				<a className={styles.movie_title}>{movie.title}</a>
			</Link>
			<div className={styles.info}>
				{movie.genres.map(genres => (
					<p key={genres._id}>{genres.name},</p>
				))}
				<p>
					{movie.parameters.duration}
					<span>min</span>
				</p>
			</div>
		</div>
	)
}

export default MovieItem
