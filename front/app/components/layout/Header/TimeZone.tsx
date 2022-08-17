import { FC } from 'react'
import { ITimeZone } from './timezone.interface'

import styles from './Header.module.scss'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const TimeZone: FC<{ time: ITimeZone }> = ({ time: { hours, heading } }) => {
	return (
		<h1 className={styles.heading}>
			{hours >= 17 || (hours >= 0 && hours <= 4)
				? (heading = 'GoodNight')
				: (heading = 'GoodDay')}
			, Alex!
			{heading == 'GoodNight' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
		</h1>
	)
}

export default TimeZone
