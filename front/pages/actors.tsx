import ActorCatalog from '@/components/ui/catalog/ActorCatalog'
import { ActorService } from '@/services/actor.service'
import { IActor } from '@/shared/types/movie.types'
import { NextPage } from 'next'

const TrendingPage: NextPage<{ actors: IActor[] }> = ({ actors }) => {
	return <ActorCatalog title='All actors' actors={actors || []} />
}

export async function getStaticProps() {
	try {
		const { data: actors } = await ActorService.GetAll()

		return {
			props: {
				actors,
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
