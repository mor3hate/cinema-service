import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.GetAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const clearSearch = () => {
		setSearchTerm('')
	}

	return { isSuccess, handleSearch, data, searchTerm, clearSearch }
}
