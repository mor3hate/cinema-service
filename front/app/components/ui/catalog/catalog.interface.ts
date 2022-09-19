import { IActor, IMovie } from '@/shared/types/movie.types'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovie[]
}

export interface IActorCatalog {
	title: string
	description?: string
	actors: IActor[]
}
