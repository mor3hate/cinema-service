import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import ButtonAuth from '@/components/ui/button/ButtonAuth'
import Field from '@/components/ui/input-fields/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/slug-generator/SlugField'
import { generateSlug } from '@/utils/generateSlug'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import AuthFields from '../../auth/AuthFields'
import { IUserEditInput } from './user-edit.interface'
import { useUserEdit } from './UseUserEdit'

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})

	const { onSubmit, isLoading } = useUserEdit(setValue)

	return (
		<Meta title='Edit users'>
			<AdminNavigation />
			<form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto'>
				{isLoading ? (
					<div className='w-1/2'>
						<SkeletonLoader count={3} />
					</div>
				) : (
					<>
						<AuthFields register={register} formState={formState} />

						<Controller
							control={control}
							name='isAdmin'
							render={({ field }) => (
								<button
									onClick={e => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className='block mb-5 hover:underline'
								>
									{field.value ? 'Make it regular user' : 'Make it admin'}
								</button>
							)}
						/>
					</>
				)}
				<ButtonAuth text='Update' disabled={isLoading} />
			</form>
		</Meta>
	)
}

export default UserEdit
