import { AntIconsTypeName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: AntIconsTypeName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
