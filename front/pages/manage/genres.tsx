import GenreListPage from '@/components/screens/admin/genres/GenresListPage'
import { NextPageAuth } from '@/shared/types/auth.types'

const GenresPage: NextPageAuth = () => {
	return <GenreListPage />
}

GenresPage.isOnlyAdmin = true

export default GenresPage
