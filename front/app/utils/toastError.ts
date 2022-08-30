import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toastr.error(title || 'Something went wrong', message)
	throw message
}
