import { FC } from 'react'

import styles from './Slider.module.scss'
import cn from 'classnames'
import AntIcon from '../AntIcon'

interface ISlideArrow {
	type: 'left' | 'right'
	clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ type, clickHandler }) => {
	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: type === 'left',
				[styles.right]: type === 'right',
			})}
		>
			<AntIcon name={type === 'left' ? 'AiOutlineLeft' : 'AiOutlineRight'} />
		</button>
	)
}

export default SlideArrow
