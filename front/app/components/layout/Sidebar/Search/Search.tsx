import { FC } from 'react'
import { useSearch } from './useSearch'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import SearchField from '@/components/ui/search-field/SearchField'

const Search: FC = () => {
	const { data, handleSearch, isSuccess, searchTerm, clearSearch } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} onClick={clearSearch} />}
		</div>
	)
}

export default Search
