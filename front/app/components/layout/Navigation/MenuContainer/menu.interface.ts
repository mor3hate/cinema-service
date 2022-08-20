import { AntIconsTypeName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: AntIconsTypeName
	title?: string
	link: any
}

export interface IMenu {
	title?: string
	items: IMenuItem[]
	type: string
}
