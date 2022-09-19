import Catalog from '@/components/ui/catalog/Catalog'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { NextPage } from 'next'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title='Trending now movies'
			description='Always new movies with best quality and without ads'
		/>
	)
}

export async function getStaticProps() {
	try {
		const { data: movies } = await MovieService.GetAll()

		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
