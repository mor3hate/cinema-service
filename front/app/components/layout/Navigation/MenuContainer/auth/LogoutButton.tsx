import AntIcon from '@/components/ui/AntIcon'
import { useActions } from '@/hooks/useActions'
import { FC, MouseEvent } from 'react'
import MenuItem from '../MenuItem'

const LogoutButton: FC = () => {
	const { logOut } = useActions()

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logOut()
	}

	return (
		<li>
			<a onClick={handleLogout} style={{ cursor: 'pointer' }}>
				<AntIcon name='AiOutlineLogout' />
			</a>
		</li>
	)
}

export default LogoutButton
