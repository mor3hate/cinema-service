import Link from 'next/link'
import { FC } from 'react'
import AntIcon from '../AntIcon'
import { IButtonLink } from './button.interface'

import cn from 'classnames'
import styles from './Button.module.scss'

const ButtonLink: FC<IButtonLink> = ({
	text,
	type = 'primary',
	name,
	link,
	title,
}) => {
	return (
		<Link href={`${link}`}>
			<button
				className={cn(styles.button, {
					[styles.secondary]: type == 'secondary',
				})}
				title={title}
			>
				{text ? <a>{text}</a> : <AntIcon name={name} />}
			</button>
		</Link>
	)
}

export default ButtonLink
