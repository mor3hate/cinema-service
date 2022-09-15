import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { ActorService } from '@/services/actor.service'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['search all actors admin', debouncedSearch],
		() => ActorService.GetAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					})
				),
			onError: error => {
				toastError(error, 'Actors list error')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete actor'],
		(actorId: string) => ActorService.DeleteActor(actorId),
		{
			onError: error => {
				toastError(error, 'In deleting actor')
			},
			onSuccess: () => {
				toastr.success('Deleting actor', 'Successfully deleted')
				queryData.refetch()
			},
		}
	)

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		['create actor'],
		() => ActorService.CreateActor(),
		{
			onError: error => {
				toastError(error, 'In creating actor')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Creating actor', 'Successfully created')
				push(getAdminUrl(`actor/edit/${_id}`))
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
