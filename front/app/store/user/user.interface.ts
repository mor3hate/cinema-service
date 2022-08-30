import { IUser } from '@/shared/types/user.types'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface IUserTokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends IUserTokens {
	user: IUser & {
		isAdmin: boolean
	}
}
