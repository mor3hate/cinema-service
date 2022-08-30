import ButtonLink from '@/components/ui/button/ButtonLink'
import Meta from '@/utils/meta/Meta'
import React from 'react'

const error500 = () => {
	return (
		<div className='error_page'>
			<Meta title='Internal Server Error'>
				<h1>Internal Server Error</h1>
				<p>error500</p>
				<ButtonLink link='/' text='Go home page' type='primary' />
			</Meta>
		</div>
	)
}

export default error500
