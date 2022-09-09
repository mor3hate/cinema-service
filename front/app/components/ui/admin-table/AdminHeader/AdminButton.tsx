import { FC } from 'react'
import ButtonAuth from '../../button/ButtonAuth'

const AdminButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <ButtonAuth onClick={onClick} text='Create new'></ButtonAuth>
}

export default AdminButton
