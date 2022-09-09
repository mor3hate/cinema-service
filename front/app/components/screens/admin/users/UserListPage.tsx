import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useUser } from './UseUsers'

const UserListPage: FC = () => {
	const { handleSearch, searchTerm, deleteAsync, isLoading, data } = useUser()

	return (
		<Meta title='Users'>
			<AdminNavigation />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Register date']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default UserListPage
