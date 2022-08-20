import { FC } from 'react'

import Head from 'next/head'
import { ISeo } from './meta.interface'
import { useRouter } from 'next/router'
import { siteName, titleMerge } from '@/config/seo.config'

import logoImage from '@/assets/img/logo.svg'

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta name='og:title' content={titleMerge(title)} />
						<meta name='og:url' content={currentUrl} />
						<meta name='og:image' content={image || logoImage} />
						<meta name='og:site_name' content={siteName} />
						<meta name='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
