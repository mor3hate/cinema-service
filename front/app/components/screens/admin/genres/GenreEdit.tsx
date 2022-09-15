import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import ButtonAuth from '@/components/ui/button/ButtonAuth'
import Field from '@/components/ui/input-fields/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/slug-generator/SlugField'
import { generateSlug } from '@/utils/generateSlug'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './UseGenreEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/text-editor/TextEditor'),
	{
		ssr: false,
	}
)

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	})

	const { onSubmit, isLoading } = useGenreEdit(setValue)

	return (
		<Meta title='Edit genres'>
			<AdminNavigation />
			<form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto'>
				{isLoading ? (
					<div className='w-1/2'>
						<SkeletonLoader count={3} />
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

							<Field
								{...register('icon', {
									required: 'Icon is required!',
								})}
								placeholder='Icon'
								error={errors?.icon}
							/>
						</div>
						<Controller
							control={control}
							name='description'
							defaultValue=''
							render={({ field, formState: { errors } }) => (
								<DynamicTextEditor
									onChange={field.onChange}
									value={field.value}
									error={errors.description}
									placeholder='Description'
								/>
							)}
							rules={{
								required: 'Description is required',
								minLength: 6,
							}}
						/>
					</>
				)}
				<ButtonAuth text='Update' disabled={isLoading} />
			</form>
		</Meta>
	)
}

export default GenreEdit
