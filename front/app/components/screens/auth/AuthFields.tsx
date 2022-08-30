import Field from '@/components/ui/input-fields/Field'
import { validateEmail } from '@/config/constants/constants'
import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

interface IAuthField {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validateEmail,
						message: 'Enter valid e-mail',
					},
				})}
				placeholder='e-mail'
				// @ts-ignore
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password should be more than 6 symbols',
								},
						  }
						: {}
				)}
				placeholder='password'
				type='password'
				// @ts-ignore
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
