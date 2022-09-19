import { useAuth } from '@/hooks/useAuth'
import { RatingService } from '@/services/rating.service'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { toastr } from 'react-redux-toastr'

export const useRateMovie = (movieId: string) => {
	const { user } = useAuth()
	const [rating, setRating] = useState(0)
	const [sended, isSended] = useState(false)

	const { refetch } = useQuery(
		['rating movies', movieId],
		() => RatingService.GetByUserMovie(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},
			onError(error) {
				toastError(error, 'Get rating')
			},
			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync } = useMutation(
		['set new rating'],
		({ value }: { value: number }) => RatingService.SetRating(movieId, value),
		{
			onError(error) {
				toastError(error, 'Rate movie')
			},
			onSuccess() {
				toastr.success('Update Rating', 'Successfully updated')

				isSended(true)
				refetch()

				setTimeout(() => {
					isSended(false)
				}, 2400)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}

	const handleHover = async (nextValue: number) => {
		setRating(nextValue)
	}

	return { sended, rating, handleClick, handleHover }
}
