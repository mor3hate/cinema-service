import { getAdminUrl } from '@/config/url.config'
import { ActorService } from '@/services/actor.service'
import { GetKeys } from '@/utils/ObjectKeys'
import { toastError } from '@/utils/toastError'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { IActorEditInput } from './actor-edit.interface'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor admin edit', actorId],
		() => ActorService.GetActorById(actorId),
		{
			onSuccess({ data }) {
				GetKeys(data).forEach(i => {
					setValue(i, data[i])
				})
			},
			onError(error) {
				toastError(error, 'Get actor')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['update actor'],
		(data: IActorEditInput) => ActorService.UpdateActor(actorId, data),
		{
			onError(error) {
				toastError(error, 'Update actor')
			},
			onSuccess() {
				toastr.success('Update actor', 'Successfully updated')
				push(getAdminUrl('actors'))
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
