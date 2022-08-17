import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { IHome } from './HomeInterface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>HomePage</h1>
		</Layout>
	)
}

export default Home
