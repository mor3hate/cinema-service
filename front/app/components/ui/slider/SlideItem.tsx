import Image from 'next/image'
import { FC } from 'react'
import ButtonLink from '../button/ButtonLink'
import { ISlide } from './slider.interface'

import styles from './Slider.module.scss'

interface ISlideItem {
	slide: ISlide
}

const SlideItem: FC<ISlideItem> = ({ slide }) => {
	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<Image
					alt={slide.title}
					src={slide.bigPoster}
					draggable={false}
					unoptimized
					layout='fill'
					className={styles.img}
				/>
			)}

			<div className={styles.slide_content}>
				<div className={styles.slide_blur}></div>
				<div className={styles.slide_title}>{slide.title}</div>
				<div className={styles.slide_subtitle}>{slide.subTitle}</div>
				<ButtonLink
					link={slide.link}
					type='secondary'
					name='AiOutlineCaretRight'
				/>
			</div>
		</div>
	)
}

export default SlideItem
