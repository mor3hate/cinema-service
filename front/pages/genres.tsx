import Discovery from '@/components/screens/discovery/Discovery'
import { IDiscovery } from '@/components/screens/discovery/discovery.interface'
import { GenreService } from '@/services/genre.service'
import { NextPage } from 'next'

const genres: NextPage<{ collections: IDiscovery[] }> = ({ collections }) => {
	return <Discovery collection={collections || []} />
}

export async function getStaticProps() {
	try {
		const { data: collections } = await GenreService.GetCollections()

		return {
			props: {
				collections,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default genres
