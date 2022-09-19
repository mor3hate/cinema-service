import { IGenreEditInput } from '@/components/screens/admin/genres/genre-edit.interface'
import { IDiscovery } from '@/components/screens/discovery/discovery.interface'
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

	async GetCollections() {
		return axiosDefault.get<IDiscovery[]>(getGenresUrl(`collections`))
	},

	async GetBySlug(slug: string) {
		return axiosDefault.get<IGenre>(getGenresUrl(`by-slug/${slug}`))
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
