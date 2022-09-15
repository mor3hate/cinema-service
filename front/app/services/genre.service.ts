import { IGenreEditInput } from '@/components/screens/admin/genres/genre-edit.interface'
import { getGenresUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movie.types'
import instance, { axiosDefault } from 'api/interceptors'

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

	async GetById(_id: string) {
		return instance.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async DeleteGenre(_id: string) {
		return instance.delete<string>(getGenresUrl(`/${_id}`))
	},

	async UpdateGenre(_id: string, data: IGenreEditInput) {
		return instance.put<string>(getGenresUrl(`/${_id}`), data)
	},

	async CreateGenre() {
		return instance.post<string>(getGenresUrl(`/`))
	},
}
