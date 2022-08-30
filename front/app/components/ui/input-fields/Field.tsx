import { forwardRef } from 'react'
import { IField } from './field.interface'

import styles from './Field.module.scss'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.field, styles.common)} style={styles}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
