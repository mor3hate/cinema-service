import { FC } from 'react'
import { IUploadField } from '../input-fields/field.interface'
import { useUpload } from './UseUpload'

import cn from 'classnames'
import styles from '../input-fields/Field.module.scss'
import SkeletonLoader from '../SkeletonLoader'
import Image from 'next/image'

const UploadField: FC<IUploadField> = ({
	onChange,
	error,
	folder,
	placeholder,
	value,
	isNoImage = false,
	style,
}) => {
	const { isLoading, uploadImage } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.upload_field)} style={style}>
			<div className={styles.upload_flex}>
				<label>
					<span>{placeholder}</span>
					<input type='file' onChange={uploadImage} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.upload_img}>
						{isLoading ? (
							<SkeletonLoader count={1} className='w-full h-full' />
						) : (
							value && <Image alt='' src={value} layout='fill' unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
