import { FileService } from '@/services/file.service'
import { toastError } from '@/utils/toastError'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		['upload file admin'],
		(data: FormData) => FileService.Upload(data, folder),
		{
			onSuccess({ data }) {
				onChange(data[0].url)
			},
			onError(error) {
				toastError(error, 'In uploading file')
			},
		}
	)

	const uploadImage = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const file = e.target.files

			if (!file?.length) return

			const formData = new FormData()
			formData.append('file', file[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 2000)
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadImage, isLoading }), [uploadImage, isLoading])
}
