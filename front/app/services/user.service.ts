import instance from 'api/interceptors'
import { IUser } from '@/shared/types/user.types'
import { getUsersUrl } from '@/config/api.config'

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

	async DeleteUser(_id: string) {
		return instance.delete<string>(getUsersUrl(`/${_id}`))
	},
}
