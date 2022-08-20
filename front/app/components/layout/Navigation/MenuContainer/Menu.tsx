import { FC } from 'react'
import { IMenu } from './menu.interface'

import styles from './Menu.module.scss'
import cn from 'classnames'
import MenuItem from './MenuItem'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title, type } }) => {
	return (
		<div
			className={cn(styles.menu, {
				[styles.secondary_menu]: type == 'secondary',
			})}
		>
			{title && <div className={styles.title}>{title}</div>}
			<ul>
				{items.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</div>
	)
}

export default Menu
