import UserListPage from '@/components/screens/admin/users/UserListPage'
import { NextPageAuth } from '@/shared/types/auth.types'

const user: NextPageAuth = () => {
	return <UserListPage />
}

user.isOnlyAdmin = true

export default user
