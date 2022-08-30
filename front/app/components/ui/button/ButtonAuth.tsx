import { FC } from 'react'
import { IButtonAuth } from './button.interface'

import styles from './Button.module.scss'

const ButtonAuth: FC<IButtonAuth> = ({ onClick, disabled, text }) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	)
}

export default ButtonAuth
