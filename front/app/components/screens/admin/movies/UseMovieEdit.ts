import { getAdminUrl } from '@/config/url.config'
import { MovieService } from '@/services/movie.service'
import { GetKeys } from '@/utils/ObjectKeys'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { IMovieEditInput } from './movie-edit.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.GetById(movieId),
		{
			onSuccess({ data }) {
				GetKeys(data).forEach(i => {
					setValue(i, data[i])
				})
			},
			onError(error) {
				toastError(error, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['update genre'],
		(data: IMovieEditInput) => MovieService.UpdateMovie(movieId, data),
		{
			onError(error) {
				toastError(error, 'Update movie')
			},
			onSuccess() {
				toastr.success('Update movie', 'Successfully updated')
				push(getAdminUrl('movies'))
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
