export interface IButtonLink {
	link: string
	text?: string
	type: string
	name?: any
	title?: string
}

export interface IButtonAuth {
	onClick?: () => void
	disabled?: boolean
	text: string
}
