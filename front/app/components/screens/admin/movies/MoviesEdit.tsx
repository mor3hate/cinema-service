import AdminNavigation from '@/components/ui/admin-nav/AdminNavigation'
import ButtonAuth from '@/components/ui/button/ButtonAuth'
import Field from '@/components/ui/input-fields/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SlugField from '@/components/ui/slug-generator/SlugField'
import UploadField from '@/components/ui/upload-fields/UploadField'
import { generateSlug } from '@/utils/generateSlug'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActors } from './UseAdminActors'
import { useAdminGenres } from './UseAdminGenres'
import { useMovieEdit } from './UseMovieEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/text-editor/TextEditor'),
	{
		ssr: false,
	}
)

const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
	ssr: false,
})

const MoviesEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { onSubmit, isLoading } = useMovieEdit(setValue)

	const { isLoading: isGenreLoading, data: genres } = useAdminGenres()

	const { isLoading: isActorLoading, data: actorData } = useAdminActors()

	return (
		<Meta title='Edit movies'>
			<AdminNavigation />
			<form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto'>
				{isLoading ? (
					<div className='w-1/2'>
						<SkeletonLoader count={5} />
					</div>
				) : (
					<>
						<div className='edit_fields'>
							<Field
								{...register('title', {
									required: 'Title is required!',
								})}
								placeholder='Title'
								error={errors?.title}
							/>

							<div>
								<SlugField
									register={register}
									error={errors?.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')))
									}}
								/>
							</div>

							<Field
								{...register('parameters.country', {
									required: 'Country is required!',
								})}
								placeholder='Country'
								error={errors?.parameters?.country}
							/>

							<Field
								{...register('parameters.duration', {
									required: 'Duration is required!',
								})}
								placeholder='Duration'
								error={errors?.parameters?.duration}
							/>

							<Field
								{...register('parameters.year', {
									required: 'Year is required!',
								})}
								placeholder='Year'
								error={errors?.parameters?.year}
							/>
							<Field
								{...register('rating', {
									required: 'Rating is required!',
								})}
								placeholder='Rating'
								error={errors?.rating}
							/>

							<Controller
								control={control}
								name='genres'
								render={({ field, formState: { errors } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenreLoading}
										isMulti
										placeholder='Genres'
										//@ts-ignore
										error={errors?.genres}
									/>
								)}
								rules={{
									required: 'Genres are required!',
								}}
							/>

							<Controller
								control={control}
								name='actors'
								render={({ field, formState: { errors } }) => (
									<DynamicSelect
										field={field}
										options={actorData || []}
										isLoading={isActorLoading}
										isMulti
										placeholder='Actors'
										//@ts-ignore
										error={errors?.actors}
									/>
								)}
								rules={{
									required: 'Actors are required!',
								}}
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

						<Controller
							control={control}
							name='poster'
							defaultValue=''
							render={({ field, formState: { errors } }) => (
								<UploadField
									onChange={field.onChange}
									error={errors?.poster}
									value={field.value}
									folder='movies'
									placeholder='Poster'
								/>
							)}
							rules={{
								required: 'Poster is required',
							}}
						/>

						<Controller
							control={control}
							name='bigPoster'
							defaultValue=''
							render={({ field, formState: { errors } }) => (
								<UploadField
									onChange={field.onChange}
									error={errors?.bigPoster}
									value={field.value}
									folder='movies'
									placeholder='Big Poster'
								/>
							)}
							rules={{
								required: 'Big Poster is required',
							}}
						/>

						<Controller
							control={control}
							name='videoUrl'
							defaultValue=''
							render={({ field, formState: { errors } }) => (
								<UploadField
									onChange={field.onChange}
									error={errors?.poster}
									value={field.value}
									folder='movies'
									placeholder='Video'
									isNoImage
								/>
							)}
							rules={{
								required: 'Video is required',
							}}
						/>
					</>
				)}
				<ButtonAuth text='Update' disabled={isLoading} />
			</form>
		</Meta>
	)
}

export default MoviesEdit
