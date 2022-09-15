import { IOption } from '@/components/ui/select/select-interface'
import { ActorService } from '@/services/actor.service'
import { toastError } from '@/utils/toastError'
import { useQuery } from '@tanstack/react-query'

export const useAdminActors = () => {
	const queryData = useQuery(
		['list actors for movie admin'],
		() => ActorService.GetAll(),
		{
			select: ({ data }) =>
				data.map(
					(actor): IOption => ({
						label: actor.name,
						value: actor._id,
					})
				),
			onError: error => {
				toastError(error, 'In getting actors list')
			},
		}
	)

	return queryData
}
