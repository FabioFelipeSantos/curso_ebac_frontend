import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"
import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api"

export interface GalleryItem {
	type: "image" | "video"
	url: string
}

export type Game = {
	id: number
	name: string
	description: string
	release_date?: string
	prices: { discount?: number; old?: number; current?: number }
	details: {
		category: string
		system: string
		developer: string
		publisher: string
		languages: string[]
	}
	media: {
		thumbnail: string
		cover: string
		gallery: GalleryItem[]
	}
}

export default function Home() {
	const { data: onSaleGames } = useGetOnSaleQuery()
	const { data: soonGames } = useGetSoonQuery()

	if (!onSaleGames || !soonGames) {
		return <h4 className="container"> Está Carregando</h4>
	}

	return (
		<>
			<Banner />
			<ProductsList games={onSaleGames} title="Promoções" background="gray" id="on-sale" />
			<ProductsList games={soonGames} title="Em breve" background="black" id="coming-soon" />
		</>
	)
}
