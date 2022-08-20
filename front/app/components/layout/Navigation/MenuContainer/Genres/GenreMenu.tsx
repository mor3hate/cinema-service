import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { FC } from 'react'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div>
			<SkeletonLoader count={4} className='mt-3' />
		</div>
	) : (
		<Menu
			menu={{ title: 'Popular genres', items: data || [], type: 'primary' }}
		/>
	)
}

export default GenreMenu
