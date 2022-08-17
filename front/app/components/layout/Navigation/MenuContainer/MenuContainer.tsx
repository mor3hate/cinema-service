import { FC } from 'react'
import Menu from './Menu'
import { firstMenu, libraryMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<Menu menu={libraryMenu} />
		</div>
	)
}

export default MenuContainer
