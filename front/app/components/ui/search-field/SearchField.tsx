import { useOnClickOutside } from '@/hooks/useOutside'
import { ChangeEvent, FC, useState, useRef } from 'react'
import AntIcon from '../AntIcon'

import styles from './SearchField.module.scss'
import cn from 'classnames'

interface ISearch {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearch> = ({ searchTerm, handleSearch }) => {
	const [show, setIsShow] = useState(false)

	const searchRef = useRef<HTMLDivElement>(null)

	const handleClick = () => {
		setIsShow(!show)
	}

	useOnClickOutside(searchRef, () => setIsShow(false))

	return (
		<div
			ref={searchRef}
			className={cn(styles.search_field, {
				[styles.search_field_active]: show,
			})}
		>
			<input
				type='search'
				placeholder='Search'
				value={searchTerm}
				onChange={handleSearch}
				className={cn('search_input', {
					'search_input active': show,
				})}
			/>

			<button
				className={cn(styles.search_button, {
					[styles.search_button_active]: show,
				})}
				title='Search movies'
				onClick={() => handleClick()}
			>
				<AntIcon name='AiOutlineSearch' />
			</button>
		</div>
	)
}

export default SearchField
