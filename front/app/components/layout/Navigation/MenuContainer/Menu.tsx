import { FC } from 'react'
import { IMenu } from './menu.interface'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.title}>{title}</div>
			<ul>
				{items.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</div>
	)
}

export default Menu
