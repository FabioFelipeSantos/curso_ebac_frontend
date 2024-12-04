import { useEffect, useState } from "react"

import Button from "../Button"
import Tag from "../Tag"
import { Image, Prices, Title } from "./styles"

import { Game } from "../../Pages/Home"
import formatPrice from "../../utils/formatPrice"

const Banner = () => {
	const [game, setGame] = useState<Game>()

	useEffect(() => {
		fetch("https://fake-api-tau.vercel.app/api/eplay/destaque")
			.then(response => response.json())
			.then(data => setGame(data))
	}, [])

	if (!game) {
		return <h2 className="container">Carregando...</h2>
	}
	return (
		<Image style={{ backgroundImage: `url(${game.media.cover})` }}>
			<div className="container">
				<Tag size="big">Destaque do dia</Tag>
				<div>
					<Title>{game.name}</Title>
					<Prices>
						De <span>{formatPrice(game.prices.old)}</span> por apenas{" "}
						{formatPrice(game.prices.current)}
					</Prices>
				</div>
				<Button type="link" to={`/product/${game.id}`} title="Clique aqui para aproveitar a oferta">
					Aproveite a oferta
				</Button>
			</div>
		</Image>
	)
}

export default Banner
