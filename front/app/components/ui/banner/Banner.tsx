import Image from 'next/image'
import { FC } from 'react'

interface IBanner {
	image: string
	Detail?: FC | null
}

import styles from './Banner.module.scss'

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				layout='fill'
				unoptimized
				priority
				className='image-bg'
				alt=''
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
