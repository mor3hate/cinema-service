import Banner from '@/components/ui/banner/Banner'
import Trending from '@/components/ui/trending/Trending'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { IMoviePage } from '../../../../pages/movies/[slug]'
import Content from './content/Content'
import { useUpdateCountOpened } from './rate-movie/useUpdateCountOpened'

const DynamicVideoPlayer = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{ ssr: false }
)

const DynamicRating = dynamic(() => import('./rate-movie/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)
	return (
		<Meta title={movie.title} description={`Watch ${movie?.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicVideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />

			<div className='font-medium text-lg mt-12 ml-3'>
				<h2 className='ml-4'>Similar</h2>
				<Trending items={similarMovies} />
			</div>

			<DynamicRating id={movie._id} slug={movie.slug} />
		</Meta>
	)
}

export default SingleMovie
