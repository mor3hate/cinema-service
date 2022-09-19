import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IProfileInput } from './profile.interface'
import { useProfile } from './UseProfile'

import styles from './Profile.module.scss'
import ButtonAuth from '@/components/ui/button/ButtonAuth'
import AuthFields from '../auth/AuthFields'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

const Profile: FC = () => {
	const { register, formState, setValue, handleSubmit } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title='Profile'>
			<h1 className='text-center text-2xl font-semibold mt-12'>
				Update your profile
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.profile_form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields
						formState={formState}
						register={register}
						isPasswordRequired={false}
					/>
				)}
				<ButtonAuth disabled={isLoading} text='Update' />
			</form>
		</Meta>
	)
}

export default Profile
