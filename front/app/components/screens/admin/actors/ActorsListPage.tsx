import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useActors } from './UseActors'

const ActorsListPage: FC = () => {
	const {
		handleSearch,
		searchTerm,
		deleteAsync,
		isLoading,
		data,
		createAsync,
	} = useActors()

	return (
		<Meta title='Actors'>
			<AdminNavigation />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Movies']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default ActorsListPage
