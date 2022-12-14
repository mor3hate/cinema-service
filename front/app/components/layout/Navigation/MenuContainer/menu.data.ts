import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	type: 'primary',
	items: [
		{
			icon: 'AiFillHome',
			title: 'Home',
			link: '/',
		},
		{
			icon: 'AiFillCompass',
			title: 'Discover',
			link: '/genres',
		},
		{
			icon: 'AiOutlineUsergroupAdd',
			title: 'Artists',
			link: '/actors',
		},
	],
}

export const libraryMenu: IMenu = {
	title: 'Library',
	type: 'primary',
	items: [
		{
			icon: 'AiTwotoneHeart',
			title: 'Favorite',
			link: '/favorites',
		},
		{
			icon: 'AiFillFire',
			title: 'Trending',
			link: '/trending',
		},
	],
}

export const secondaryMenu: IMenu = {
	type: 'secondary',
	items: [
		{
			icon: 'AiFillAppstore',
			link: '/primary-menu',
		},
		{
			icon: 'AiOutlineInbox',
			link: '/genres',
		},
	],
}
