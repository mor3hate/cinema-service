import { IMovieEditInput } from '@/components/screens/admin/movies/movie-edit.interface'
import { getMoviesUrl } from '@/config/api.config'
import { IMovie } from '@/shared/types/movie.types'
import instance, { axiosDefault } from 'api/interceptors'

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

	async getPopularMovies(firstRange: number, secondRange: number) {
		const { data: movies } = await axiosDefault.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies.splice(firstRange, secondRange)
	},

	async DeleteMovie(_id: string) {
		return instance.delete<string>(getMoviesUrl(`/${_id}`))
	},

	async GetById(_id: string) {
		return instance.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async UpdateMovie(_id: string, data: IMovieEditInput) {
		return instance.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async CreateMovie() {
		return instance.post<string>(getMoviesUrl(`/`))
	},
}
