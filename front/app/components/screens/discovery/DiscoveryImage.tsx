import Image from 'next/image'
import { FC } from 'react'
import { IDiscovery } from './discovery.interface'

const DiscoveryImage: FC<{ collection: IDiscovery }> = ({
	collection: { image, title },
}) => {
	return (
		<Image src={image} alt={title} draggable={false} layout='fill' priority />
	)
}

export default DiscoveryImage
