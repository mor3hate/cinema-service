import { ISlide } from '@/components/ui/slider/slider.interface'
import { ITrendingItem } from '@/components/ui/trending/trending.interface'

export interface IHome {
	slides: ISlide[]
	actors: ITrendingItem[]
}
