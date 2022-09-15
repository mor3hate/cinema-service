import { FC } from 'react'
import { IOption, ISelect } from './select-interface'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import styles from './Select.module.scss'
import inputStyles from '../input-fields/Field.module.scss'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	error,
	options,
	isMulti,
	field,
	isLoading,
	placeholder,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map(item => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(option => field.value.indexOf(option.value) >= 0)
				: options.find(option => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}

	return (
		<div className={styles.react_select}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix='admin-select'
					options={options}
					value={getValue()}
					placeholder={''}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={inputStyles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
