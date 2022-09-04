import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import MenuItem from '../MenuItem'
import LogoutButton from './LogoutButton'

import styles from './AuthItems.module.scss'
import { getAdminHomeUrl } from '@/config/url.config'

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
					{user.isAdmin && (
						<MenuItem
							item={{
								icon: 'AiOutlineCrown',
								link: getAdminHomeUrl(),
							}}
						/>
					)}
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
