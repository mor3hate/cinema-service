import AntIcon from '@/components/ui/AntIcon'
import { getActorsUrl } from '@/config/api.config'
import { getGenreUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import { IMovie } from '@/shared/types/movie.types'
import { FC } from 'react'
import FavoriteButton from '../favorite-button/FavoriteButton'

import styles from './Content.module.scss'
import ContentDetails from './ContentDetails'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			{user && <FavoriteButton movieId={movie._id} />}
			<div className={styles.details}>
				<span>{movie.parameters.year} | </span>
				<span>{movie.parameters.country} | </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentDetails
				name='Genres'
				links={movie.genres.slice(0, 3).map(g => ({
					_id: g._id,
					link: getGenreUrl(g.slug),
					title: g.name,
				}))}
			/>
			<ContentDetails
				name='Actors'
				links={movie.actors.slice(0, 3).map(a => ({
					_id: a._id,
					link: getActorsUrl(a.slug),
					title: a.name,
				}))}
			/>

			<div className={styles.rating}>
				<AntIcon name='AiFillStar' />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	)
}

export default Content
