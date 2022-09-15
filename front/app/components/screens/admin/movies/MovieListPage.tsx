import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useMovie } from './UseMovies'

const MovieListPage: FC = () => {
	const {
		handleSearch,
		searchTerm,
		deleteAsync,
		isLoading,
		data,
		createAsync,
	} = useMovie()

	return (
		<Meta title='Movies'>
			<AdminNavigation />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Genres', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MovieListPage
