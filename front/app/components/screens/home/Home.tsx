import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { IHome } from './HomeInterface'

const Home: FC<IHome> = () => {
	return (
		<Meta title='Watch movies online' description='Best movies'>
			<h1>HomePage</h1>
		</Meta>
	)
}

export default Home
