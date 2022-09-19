import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { ITrendingItem } from '@/components/ui/trending/trending.interface'
import { getMoviesUrl } from '@/config/api.config'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'

export interface IMoviePage {
	similarMovies: ITrendingItem[]
	movie: IMovie
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
	return movie ? (
		<SingleMovie similarMovies={similarMovies || []} movie={movie} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.GetAll()
		const paths = movies.map(m => ({
			params: { slug: m.slug },
		}))

		return { paths, fallback: true }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.GetBySlug(String(params?.slug))

		const { data: dataSimilarMovies } = await MovieService.GetByGenres(
			movie.genres.map(g => g._id)
		)

		const similarMovies: ITrendingItem[] = dataSimilarMovies
			.filter(item => item._id !== movie._id)
			.map(item => ({
				name: item.title,
				posterPath: item.poster,
				link: getMoviesUrl(item.slug),
			}))

		return {
			props: {
				movie,
				similarMovies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default MoviePage
