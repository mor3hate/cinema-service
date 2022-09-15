import { FC } from 'react'
import { ITimeZone } from './timezone.interface'

import styles from './Header.module.scss'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const TimeZone: FC<{ time: ITimeZone }> = ({ time: { hours, heading } }) => {
	const { user } = useTypedSelector(state => state)
	return (
		<h2 className={styles.heading}>
			{hours >= 17 || (hours >= 0 && hours <= 4)
				? (heading = 'GoodNight')
				: (heading = 'GoodDay')}
			,{user && <div>{user.user?.email}!</div>}
			{heading == 'GoodNight' ? (
				<BsFillMoonStarsFill color='#899499' />
			) : (
				<BsFillSunFill color='#F6E122' />
			)}
		</h2>
	)
}

export default TimeZone
