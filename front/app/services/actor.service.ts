import { IActorEditInput } from '@/components/screens/admin/actors/actor-edit.interface'
import { getActorsUrl } from '@/config/api.config'
import { IActor } from '@/shared/types/movie.types'
import instance, { axiosDefault } from 'api/interceptors'

export const ActorService = {
	async GetAll(searchTerm?: string) {
		return axiosDefault.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async DeleteActor(_id: string) {
		return instance.delete<string>(getActorsUrl(`/${_id}`))
	},

	async GetActorById(_id: string) {
		return instance.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async UpdateActor(_id: string, data: IActorEditInput) {
		return instance.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async CreateActor() {
		return instance.post<string>(getActorsUrl(`/`))
	},
}
