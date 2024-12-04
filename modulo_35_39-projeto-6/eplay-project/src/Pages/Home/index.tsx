import { useEffect, useState } from "react"

import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"

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
	const [promotions, setPromotions] = useState<Game[]>([])
	const [nextReleases, setNextReleases] = useState<Game[]>([])

	useEffect(() => {
		fetch("https://fake-api-tau.vercel.app/api/eplay/promocoes")
			.then(response => response.json())
			.then(data => setPromotions(data))

		fetch("https://fake-api-tau.vercel.app/api/eplay/em-breve")
			.then(response => response.json())
			.then(data => setNextReleases(data))
	}, [])
	return (
		<>
			<Banner />
			<ProductsList games={promotions} title="Promotions" background="gray" />
			<ProductsList games={nextReleases} title="Next Releases" background="black" />
		</>
	)
}
