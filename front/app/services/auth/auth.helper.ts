import { IAuthResponse, IUserTokens } from '@/store/user/user.interface'

import Cookies from 'js-cookie'

export const saveTokensStorage = (data: IUserTokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
