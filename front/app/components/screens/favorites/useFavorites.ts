import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery(['favorites list'], () => UserService.GetFavorites(), {
		select: ({ data }) => data,
	})

	return {
		isLoading,
		favoriteMovies,
		refetch,
	}
}
