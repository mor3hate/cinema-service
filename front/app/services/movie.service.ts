import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movie.types'
import { axiosDefault } from 'api/interceptors'

export const MovieService = {
	async GetAll(searchTerm?: string) {
		return axiosDefault.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getPopularMovies() {
		const { data: movies } = await axiosDefault.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
}
