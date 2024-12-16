import formatPrice from "../../utils/formatPrice"
import Loader from "../Loader"
import Product from "../Product"
import { List, ProductsListContainer, ProductsListTitle } from "./styles"

type Props = {
	title: string
	background: "gray" | "black"
	games?: Game[]
	id?: string
	isLoading: boolean
}

export default function ProductsList({ title, background, games, id, isLoading }: Props) {
	const getGameTags = (game: Game) => {
		const tags = []

		if (game.release_date) {
			tags.push(game.release_date)
		}

		if (game.prices.discount) {
			tags.push(`${game.prices.discount}%`)
		}

		if (game.prices.current) {
			tags.push(formatPrice(game.prices.current))
		}

		return tags
	}

	if (isLoading) {
		return <Loader />
	}

	return (
		<ProductsListContainer id={id} background={background}>
			<div className="container">
				<ProductsListTitle>{title}</ProductsListTitle>
				<List>
					{games &&
						games.map(game => (
							<li key={game.id}>
								<Product
									id={game.id}
									title={game.name}
									description={game.description}
									genre={game.details.category}
									image={game.media.thumbnail}
									infos={getGameTags(game)}
									system={game.details.system}
								/>
							</li>
						))}
				</List>
			</div>
		</ProductsListContainer>
	)
}
