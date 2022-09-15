import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useGenre } from './UseGenres'

const GenreListPage: FC = () => {
	const {
		handleSearch,
		searchTerm,
		deleteAsync,
		isLoading,
		data,
		createAsync,
	} = useGenre()

	return (
		<Meta title='Genres'>
			<AdminNavigation />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default GenreListPage
