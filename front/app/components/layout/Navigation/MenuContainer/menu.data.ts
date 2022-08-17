import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
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
