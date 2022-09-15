import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data } = useQuery(['get popular movies for sidebar'], () =>
		MovieService.getPopularMovies(0, 2)
	)

	return isLoading ? (
		<div className='mt-4 mx-auto w-1/2'>
			<SkeletonLoader count={3} />
		</div>
	) : (
		<MovieList link='/trending' movie={data || []} />
	)
}

export default PopularMovies
