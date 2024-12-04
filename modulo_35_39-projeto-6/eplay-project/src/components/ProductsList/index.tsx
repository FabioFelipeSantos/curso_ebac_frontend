import { Game } from "../../Pages/Home"
import formatPrice from "../../utils/formatPrice"
import Product from "../Product"
import { List, ProductsListContainer, ProductsListTitle } from "./styles"

type Props = {
	title: string
	background: "gray" | "black"
	games: Game[]
}

export default function ProductsList({ title, background, games }: Props) {
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

	return (
		<ProductsListContainer background={background}>
			<div className="container">
				<ProductsListTitle>{title}</ProductsListTitle>
				<List>
					{games.map(game => (
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
