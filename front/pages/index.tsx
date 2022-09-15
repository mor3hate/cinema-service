import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/HomeInterface'
import { ISlide } from '@/components/ui/slider/slider.interface'
import { ITrendingItem } from '@/components/ui/trending/trending.interface'
import { getActorsUrl, getMoviesUrl } from '@/config/api.config'
import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'
import { getGenresList } from '@/utils/movie/getGenresList'
import type { NextPage } from 'next'

const HomePage: NextPage<IHome> = ({ slides, actors }) => {
	return <Home slides={slides} actors={actors} />
}

export async function getStaticProps() {
	try {
		const { data: movies } = await MovieService.GetAll()

		const slides: ISlide[] = movies.slice(0, 4).map(item => ({
			_id: item._id,
			bigPoster: item.bigPoster,
			title: item.title,
			link: getMoviesUrl(item.slug),
			subTitle: item.genres.map(item => item.name).join(', '),
		}))

		const { data: dataActors } = await ActorService.GetAll()

		const actors: ITrendingItem[] = dataActors.slice(0, 7).map(item => ({
			name: item.name,
			posterPath: item.photo,
			link: getActorsUrl(item.slug),
			content: {
				title: item.name,
			},
		}))

		return {
			props: {
				slides,
				actors,
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
			},
		}
	}
}

export default HomePage
