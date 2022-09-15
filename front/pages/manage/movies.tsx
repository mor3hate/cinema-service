import MovieListPage from '@/components/screens/admin/movies/MovieListPage'
import { NextPageAuth } from '@/shared/types/auth.types'

const MoviesPage: NextPageAuth = () => {
	return <MovieListPage />
}

MoviesPage.isAdmin = true

export default MoviesPage
