import { UserService } from '@/services/user.service'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { IProfileInput } from './profile.interface'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.GetProfile(), {
		onSuccess: ({ data }) => {
			setValue('email', data.email)
		},
		onError(error) {
			toastError(error, 'Get profile')
		},
	})

	const { mutateAsync } = useMutation(
		['update profile'],
		(data: IProfileInput) => UserService.UpdateProfile(data),
		{
			onError(error) {
				toastError(error, 'Update profile')
			},
			onSuccess() {
				toastr.success('Update profile', 'Successfully updated')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
