import { AuthService } from '@/services/auth/auth.service'
import { toastError } from '@/utils/toastError'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'
import { IAuthResponse, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi: any) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Success!')
			return response?.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth',
	async ({ email, password }, thunkApi: any) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Success!')
			return response?.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logOut = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi: any) => {
		try {
			const response = await AuthService.getTokens()
			return response?.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error('Logouted', 'Please sign in again')

				thunkApi.dispatch(logOut())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
