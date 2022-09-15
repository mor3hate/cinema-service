import { FC } from 'react'
import { ISlide } from './slider.interface'
import { useSlider } from './UseSlider'
import { CSSTransition } from 'react-transition-group'

import styles from './Slider.module.scss'
import SlideArrow from './SlideArrow'
import SlideItem from './SlideItem'

interface ISlider {
	slides: ISlide[]
}

const Slider: FC<ISlider> = ({ slides }) => {
	const { slideIn, itExistNext, itExistPrev, handleClick, currentIdx } =
		useSlider(slides.length)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames='slider-animate'
				unmountOnExit
			>
				<SlideItem slide={slides[currentIdx]} />
			</CSSTransition>

			{itExistPrev && (
				<SlideArrow type='left' clickHandler={() => handleClick('prev')} />
			)}
			{itExistNext && (
				<SlideArrow type='right' clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
