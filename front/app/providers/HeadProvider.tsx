import { accentColor } from '@/config/constants/constants'
import Favicon from '@/utils/Favicon'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<Favicon />
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				></meta>
				<meta name='application-name' content='Mor3Cinema'></meta>
				<meta name='theme-color' content={'#191A23'}></meta>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
