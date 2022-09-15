import { getAdminUrl } from '@/config/url.config'
import { GenreService } from '@/services/genre.service'
import { GetKeys } from '@/utils/ObjectKeys'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { IGenreEditInput } from './genre-edit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter()

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.GetById(genreId),
		{
			onSuccess({ data }) {
				GetKeys(data).forEach(i => {
					setValue(i, data[i])
				})
			},
			onError(error) {
				toastError(error, 'Get genre')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['update genre'],
		(data: IGenreEditInput) => GenreService.UpdateGenre(genreId, data),
		{
			onError(error) {
				toastError(error, 'Update genre')
			},
			onSuccess() {
				toastr.success('Update genre', 'Successfully updated')
				push(getAdminUrl('genres'))
			},
		}
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
