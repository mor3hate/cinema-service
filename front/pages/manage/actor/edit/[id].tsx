import ActorEdit from '@/components/screens/admin/actors/ActorEdit'
import { NextPageAuth } from '@/shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isAdmin = true

export default ActorEditPage
