import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import ButtonAuth from '@/components/ui/button/ButtonAuth'
import Field from '@/components/ui/input-fields/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/slug-generator/SlugField'
import UploadField from '@/components/ui/upload-fields/UploadField'
import { generateSlug } from '@/utils/generateSlug'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './UseActorsEdit'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title='Edit actors'>
			<AdminNavigation />
			<form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto'>
				{isLoading ? (
					<div className='w-1/2'>
						<SkeletonLoader count={2} />
					</div>
				) : (
					<>
						<div className='edit_fields'>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder='Name'
								error={errors?.name}
							/>
							<div>
								<SlugField
									register={register}
									error={errors?.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')))
									}}
								/>
							</div>
						</div>
						<Controller
							control={control}
							name='photo'
							defaultValue=''
							render={({ field, formState: { errors } }) => (
								<UploadField
									onChange={field.onChange}
									error={errors?.photo}
									value={field.value}
									folder='actors'
									placeholder='Photo'
								/>
							)}
							rules={{
								required: 'Photo is required',
							}}
						/>
					</>
				)}
				<ButtonAuth text='Update' />
			</form>
		</Meta>
	)
}

export default ActorEdit
