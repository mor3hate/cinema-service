import { FC } from 'react'
import SkeletonLoader from '../SkeletonLoader'
import { ITableItem } from './admin-table.interface'

import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<div className='w-1/2'>
					<SkeletonLoader count={1} className='mt-5' />
				</div>
			) : tableItems.length ? (
				tableItems.map(item => (
					<AdminTableItem
						key={item._id}
						tableItem={item}
						removeHandler={() => removeHandler(item._id)}
					/>
				))
			) : (
				<div className='text-lg text-yellow-700 text-center mt-8'>
					Elements not found
				</div>
			)}
		</div>
	)
}

export default AdminTable
