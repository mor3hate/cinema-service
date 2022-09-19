import { FC } from 'react'
import parse from 'html-react-parser'

const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return <div className={className}>{parse(text)}</div>
}

export default Description
