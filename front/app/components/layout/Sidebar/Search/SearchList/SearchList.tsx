import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './SearchList.module.scss'

interface ISearchList {
	movies: IMovie[]
	onClick: () => void
}

const SearchList: FC<ISearchList> = ({ movies, onClick }) => {
	return (
		<div className={styles.search_list}>
			{movies.length ? (
				movies.map(movie => (
					<Link key={movie._id} href={getMoviesUrl(movie.slug)}>
						<a onClick={onClick}>
							<Image
								src={movie.poster}
								width={50}
								className='rounded-lg'
								height={50}
								objectFit='cover'
								objectPosition='top'
								alt={movie.title}
							/>
							<span className={styles.search_movie_title}>{movie.title}</span>
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
