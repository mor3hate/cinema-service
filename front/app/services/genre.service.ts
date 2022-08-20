import { getGenresUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movie.types'
import { axiosDefault } from 'api/interceptors'

export const GenreService = {
	async GetAll(searchTerm?: string) {
		return axiosDefault.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
