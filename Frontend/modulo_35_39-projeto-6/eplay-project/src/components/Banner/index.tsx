import Button from "../Button"
import Tag from "../Tag"
import { Image, Prices, Title } from "./styles"

import formatPrice from "../../utils/formatPrice"
import { useGetFeaturedGameQuery } from "../../services/api"
import Loader from "../Loader"

const Banner = () => {
	const { data: game } = useGetFeaturedGameQuery()

	if (!game) {
		return <Loader />
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
