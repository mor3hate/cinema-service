import ButtonLink from '@/components/ui/button/ButtonLink'
import { FC } from 'react'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'

import styles from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ link, movie }) => {
	return (
		<div className={styles.movieList}>
			{movie.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<ButtonLink link={`${link}`} type='secondary' name='AiOutlinePlus' />
		</div>
	)
}

export default MovieList
