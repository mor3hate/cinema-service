import { UserService } from '@/services/user.service'
import { toastError } from '@/utils/toastError'
import { useMutation } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'
import { useFavorites } from '../../favorites/useFavorites'

import styles from './FavoriteButton.module.scss'
import cn from 'classnames'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isClicked, setIsClicked] = useState(false)

	const { favoriteMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return

		const movieExists = favoriteMovies.some(f => f._id === movieId)

		if (isClicked !== movieExists) setIsClicked(movieExists)
	}, [favoriteMovies, isClicked, movieId])

	const { mutateAsync } = useMutation(
		['update favorites'],
		() => UserService.ToggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Cannot add to favorites')
			},
			onSuccess() {
				setIsClicked(!isClicked)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.clicked]: isClicked,
			})}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		></button>
	)
}

export default FavoriteButton
