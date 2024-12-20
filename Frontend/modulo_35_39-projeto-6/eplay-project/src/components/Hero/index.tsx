import { useDispatch } from "react-redux"
import formatPrice from "../../utils/formatPrice"
import Button from "../Button"
import Tag from "../Tag"
import { Banner, Infos } from "./styles"
import { add, open } from "../../store/reducers/cart"

type Props = {
	game: Game
}

export default function Hero({ game }: Props) {
	const dispatch = useDispatch()

	const addToCart = () => {
		dispatch(add(game))
		dispatch(open())
	}
	return (
		<Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
			<div className="container">
				<div>
					<Tag>{game.details.category}</Tag>
					<Tag>{game.details.system}</Tag>
				</div>

				<Infos>
					<h2>{game.name}</h2>
					<p>
						{game.prices.old && <span>De {formatPrice(game.prices.old)}</span>}
						{game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
					</p>
					{game.prices.current && (
						<Button
							onClick={addToCart}
							type="button"
							title="Click here to add this game to your cart"
							variant="primary">
							Comprar
						</Button>
					)}
				</Infos>
			</div>
		</Banner>
	)
}
