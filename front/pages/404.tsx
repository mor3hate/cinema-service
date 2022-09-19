import ButtonLink from '@/components/ui/button/ButtonLink'
import Meta from '@/utils/meta/Meta'
import React from 'react'

const Error404 = () => {
	return (
		<div className='error_page'>
			<Meta title='Page not found'>
				<h1>Lost your way?</h1>
				<p>We can't find the page you're looking for</p>
				<p>error404</p>
				<ButtonLink link='/' text='Go home page' type='primary' />
			</Meta>
		</div>
	)
}

export default Error404
