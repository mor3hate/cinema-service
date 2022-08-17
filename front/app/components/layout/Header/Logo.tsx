import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import stylesHeader from './Header.module.scss'
import logoImg from '@/assets/img/logo.svg'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<a className={stylesHeader.link}>
				<Image
					src={logoImg}
					height='40'
					width='40'
					alt='logo'
					draggable={false}
				/>
				<div className={stylesHeader.title}>Mor3Cinema</div>
			</a>
		</Link>
	)
}

export default Logo
