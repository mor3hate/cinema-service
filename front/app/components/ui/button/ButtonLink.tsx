import Link from 'next/link'
import { FC } from 'react'
import AntIcon from '../AntIcon'
import { IButtonLink } from './Button.interface'

import cn from 'classnames'
import styles from './Button.module.scss'

const ButtonLink: FC<IButtonLink> = ({
	text,
	type = 'primary',
	name,
	link,
}) => {
	return (
		<Link href={`${link}`}>
			<button
				className={cn(styles.button, {
					[styles.secondary]: type == 'secondary',
				})}
			>
				{text ? <a>{text}</a> : <AntIcon name={name} />}
			</button>
		</Link>
	)
}

export default ButtonLink
