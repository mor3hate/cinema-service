import instance from 'api/interceptors'
import { IUser } from '@/shared/types/user.types'
import { getUsersUrl } from '@/config/api.config'
import { IProfileInput } from '@/components/screens/profile/profile.interface'
import { IUserEditInput } from '@/components/screens/admin/users/user-edit.interface'
import { IMovie } from '@/shared/types/movie.types'

export const UserService = {
	async GetAll(searchTerm?: string) {
		return instance.get<IUser[]>(getUsersUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async GetProfile() {
		return instance.get<IUser>(getUsersUrl(`/profile`))
	},

	async GetFavorites() {
		return instance.get<IMovie[]>(getUsersUrl(`/profile/favorites`))
	},

	async ToggleFavorite(movieId: string) {
		return instance.post<string>(getUsersUrl(`/profile/favorites`), { movieId })
	},

	async UpdateProfile(data: IProfileInput) {
		return instance.put<string>(getUsersUrl(`/profile`), data)
	},

	async DeleteUser(_id: string) {
		return instance.delete<string>(getUsersUrl(`/${_id}`))
	},

	async GetById(_id: string) {
		return instance.get<IUserEditInput>(getUsersUrl(`/${_id}`))
	},

	async UpdateUser(_id: string, data: IUserEditInput) {
		return instance.put<string>(getUsersUrl(`/${_id}`), data)
	},
}
