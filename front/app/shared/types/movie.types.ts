import { AntIconsTypeName } from './icon.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: AntIconsTypeName
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	rating: number
	description: string
	genres: IGenre[]
	actors: IActor[]
	parameters: IParameters
	slug: string
	countOpened: number
	videoUrl: string
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	name: string
	photo: string
	slug: string
	countMovies: number
}
