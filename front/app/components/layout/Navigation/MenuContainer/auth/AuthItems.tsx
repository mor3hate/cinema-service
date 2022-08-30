import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import MenuItem from '../MenuItem'
import LogoutButton from './LogoutButton'

import styles from './AuthItems.module.scss'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<div className={styles.auth}>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'AiOutlineUser',
							link: '/profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'AiOutlineLogin',
						link: '/auth',
					}}
				/>
			)}
		</div>
	)
}

export default AuthItems
