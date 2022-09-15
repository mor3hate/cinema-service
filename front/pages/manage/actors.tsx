import ActorsListPage from '@/components/screens/admin/actors/ActorsListPage'
import { NextPageAuth } from '@/shared/types/auth.types'

const ActorsPage: NextPageAuth = () => {
	return <ActorsListPage />
}

ActorsPage.isAdmin = true

export default ActorsPage
