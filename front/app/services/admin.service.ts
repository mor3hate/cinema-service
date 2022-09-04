import { getUsersUrl } from '@/config/api.config'
import instance from 'api/interceptors'

export const AdminService = {
	async GetCountUser() {
		return instance.get<number>(getUsersUrl('/count'))
	},
}
