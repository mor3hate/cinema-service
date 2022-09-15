import Slider from '@/components/ui/slider/Slider'
import Trending from '@/components/ui/trending/Trending'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { IHome } from './HomeInterface'

const Home: FC<IHome> = ({ slides, actors }) => {
	return (
		<Meta title='Watch movies online' description='Best movies'>
			{slides.length && <Slider slides={slides} />}
			<div className='font-medium text-lg mt-12 ml-3'>Best actors</div>
			{actors.length && <Trending items={actors} />}
		</Meta>
	)
}

export default Home
