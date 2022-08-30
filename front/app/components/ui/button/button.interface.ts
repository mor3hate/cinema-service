export interface IButtonLink {
	link: string
	text?: string
	type: string
	name?: any
}

export interface IButtonAuth {
	onClick: () => void
	disabled: boolean
	text: string
}
