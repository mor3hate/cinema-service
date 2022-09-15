import MoviesEdit from '@/components/screens/admin/movies/MoviesEdit'
import { NextPageAuth } from '@/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <MoviesEdit />
}

MovieEditPage.isAdmin = true

export default MovieEditPage
