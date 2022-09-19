import AuthButton from '@/components/ui/video-player/AuthPlaceholder/AuthButton'
import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import StarRating from 'react-star-rating-component'

import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth()

	const { sended, rating, handleClick, handleHover } = useRateMovie(id)

	return (
		<div className={styles.rating_parent}>
			<h3>Do you like the movie?</h3>
			<p style={{ marginBottom: 10 }}>Ratings improve recommendations</p>
			{user ? (
				<>
					{sended ? (
						<p className={styles.sendMessage}>Thanks for your opinion!</p>
					) : (
						<StarRating
							name='star-rating'
							value={rating}
							onStarClick={handleClick}
							onStarHover={handleHover}
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
