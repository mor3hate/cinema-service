import { AntIconsTypeName } from '@/shared/types/icon.types'
import { FC } from 'react'
import * as AntIcons from 'react-icons/ai'

const AntIcon: FC<{ name: AntIconsTypeName }> = ({ name }) => {
	const IconComponent = AntIcons[name]

	return <IconComponent /> || <AntIcons.AiFillWarning />
}

export default AntIcon
