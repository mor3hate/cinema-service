import instance from 'api/interceptors'
import { getRatingsUrl } from '@/config/api.config'

export const RatingService = {
	async SetRating(movieId: string, value: number) {
		return instance.post<string>(getRatingsUrl(`/set-rating`), {
			movieId,
			value,
		})
	},

	async GetByUserMovie(movieId: string) {
		return instance.get<number>(getRatingsUrl(`/${movieId}`))
	},
}
