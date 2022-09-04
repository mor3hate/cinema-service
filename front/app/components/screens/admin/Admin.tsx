import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title='Admin stats'>
			<AdminNavigation />
			<Statistics />
		</Meta>
	)
}

export default Admin
