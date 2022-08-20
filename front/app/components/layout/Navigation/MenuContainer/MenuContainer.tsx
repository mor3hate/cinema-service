import { FC } from 'react'
import GenreMenu from './Genres/GenreMenu'
import Menu from './Menu'
import { firstMenu, libraryMenu, secondaryMenu } from './menu.data'

interface Menus {
	type: string
}

const MenuContainer: FC<Menus> = ({ type }) => {
	return (
		<>
			{type == 'primary' ? (
				<div>
					<Menu menu={firstMenu} />
					<Menu menu={libraryMenu} />
					<GenreMenu />
				</div>
			) : (
				<div>
					<Menu menu={secondaryMenu} />
				</div>
			)}
		</>
	)
}

export default MenuContainer
