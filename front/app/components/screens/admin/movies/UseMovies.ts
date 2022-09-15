import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie.service'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'

export const useMovie = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['search all movies admin', debouncedSearch],
		() => MovieService.GetAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							movie.genres.map(item => item.name).join(', '),
							String(movie.rating),
						],
					})
				),
			onError: error => {
				toastError(error, 'Movie list error')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete movie'],
		(movieId: string) => MovieService.DeleteMovie(movieId),
		{
			onError: error => {
				toastError(error, 'In deleting movie')
			},
			onSuccess: () => {
				toastr.success('Deleting movie', 'Successfully deleted')
				queryData.refetch()
			},
		}
	)

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		['create movie'],
		() => MovieService.CreateMovie(),
		{
			onError: error => {
				toastError(error, 'In creating movie')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Creating movie', 'Successfully created')
				push(getAdminUrl(`movie/edit/${_id}`))
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
