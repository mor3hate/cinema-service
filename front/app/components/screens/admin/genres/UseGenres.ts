import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { GenreService } from '@/services/genre.service'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'

export const useGenre = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['search all genres admin', debouncedSearch],
		() => GenreService.GetAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError: error => {
				toastError(error, 'Genre list error')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete genre'],
		(genreId: string) => GenreService.DeleteGenre(genreId),
		{
			onError: error => {
				toastError(error, 'In deleting genre')
			},
			onSuccess: () => {
				toastr.success('Deleting genre', 'Successfully deleted')
				queryData.refetch()
			},
		}
	)

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		['create genre'],
		() => GenreService.CreateGenre(),
		{
			onError: error => {
				toastError(error, 'In creating genre')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Creating genre', 'Successfully created')
				push(getAdminUrl(`genre/edit/${_id}`))
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
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
