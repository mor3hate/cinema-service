import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.search_list}>
			{movies.length ? (
				movies.map(movie => (
					<Link key={movie._id} href={getMoviesUrl(movie.slug)}>
						<a>
							<Image
								src={movie.poster}
								width={50}
								className='rounded-lg'
								height={50}
								objectFit='cover'
								objectPosition='top'
								alt={movie.title}
							/>
							<div className={styles.flex_wrapper}>
								<span>{movie.title}</span>
							</div>
						</a>
					</Link>
				))
			) : (
				<div>Not found</div>
			)}
		</div>
	)
}

export default SearchList
