import GenreEdit from '@/components/screens/admin/genres/GenreEdit'
import { NextPageAuth } from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GenreEditPage.isAdmin = true

export default GenreEditPage
