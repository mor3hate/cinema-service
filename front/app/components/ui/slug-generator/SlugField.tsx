import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import Field from '../input-fields/Field'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ error, register, generate }) => {
	return (
		<div className='relative'>
			<Field
				{...register('slug', {
					required: 'Slug is required!',
				})}
				placeholder='Slug'
				error={error}
			/>
			<div className={styles.slug_badge} onClick={generate}>
				Generate
			</div>
		</div>
	)
}

export default SlugField
