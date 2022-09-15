export interface ITrendingItem {
	posterPath: string
	name: string
	link: string
	content?: {
		title: string
	}
}

export interface ITrendingItemProps {
	trendingItem: ITrendingItem
	variant: 'vertical' | 'horizontal'
}
