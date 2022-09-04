import { getAuthUrl } from '@/config/api.config'
import { IAuthResponse } from '@/store/user/user.interface'
import { axiosDefault } from 'api/interceptors'
import { removeTokensStorage, saveToStorage } from './auth.helper'
import Cookies from 'js-cookie'
import { getContentType } from 'api/api.helpers'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
			return response
		}
	},
	async login(email: string, password: string) {
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
			return response
		}
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
			return response
		}
	},
}
