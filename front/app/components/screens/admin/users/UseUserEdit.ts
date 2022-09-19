import { getAdminUrl } from '@/config/url.config'
import { UserService } from '@/services/user.service'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { IUserEditInput } from './user-edit.interface'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { push, query } = useRouter()

	const UserId = String(query.id)

	const { isLoading } = useQuery(
		['User', UserId],
		() => UserService.GetById(UserId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError(error) {
				toastError(error, 'Get User')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['update User'],
		(data: IUserEditInput) => UserService.UpdateUser(UserId, data),
		{
			onError(error) {
				toastError(error, 'Update User')
			},
			onSuccess() {
				toastr.success('Update User', 'Successfully updated')
				push(getAdminUrl('users'))
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
