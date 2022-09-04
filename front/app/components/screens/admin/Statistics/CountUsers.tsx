import { AdminService } from '@/services/admin.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import cn from 'classnames'
import styles from '../Admin.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery(['count users'], () =>
		AdminService.GetCountUser()
	)

	return (
		<div className={cn(styles.block, styles.count_users)}>
			{isLoading ? (
				<div className='w-1/2'>
					<SkeletonLoader count={1} />
				</div>
			) : (
				<div>{response?.data}</div>
			)}
			<div>users</div>
		</div>
	)
}

export default CountUsers
