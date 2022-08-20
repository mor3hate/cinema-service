import { API_URL } from '@/config/api.config'
import axios from 'axios'

export const axiosDefault = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-type': 'application/json',
	},
})
