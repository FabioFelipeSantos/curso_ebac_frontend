import Button from "../Button"
import { CarContainer, CartItem, Overlay, Prices, Quantity, Sidebar } from "./styles"

import Tag from "../Tag"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import formatPrice from "../../utils/formatPrice"

export default function Cart() {
	const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

	const dispatch = useDispatch()

	const closeCart = () => {
		dispatch(close())
	}

	const getTotalPrice = () => {
		return items.reduce((acc, cur) => (acc += cur.prices.current!), 0)
	}

	return (
		<CarContainer className={isOpen ? "is-open" : ""}>
			<Overlay onClick={closeCart} />

			<Sidebar>
				<ul>
					{items.map(item => (
						<CartItem>
							<img src={item.media.thumbnail} alt={item.name} />
							<div>
								<h3>{item.name}</h3>
								<Tag>{item.details.category}</Tag>
								<Tag>{item.details.system}</Tag>
								<span>{formatPrice(item.prices.current)}</span>
							</div>
							<button type="button" onClick={() => dispatch(remove(item.id))} />
						</CartItem>
					))}
				</ul>

				<Quantity>{items.length} jogo(s) no carrinho</Quantity>

				<Prices>
					Total de {formatPrice(getTotalPrice())}
					<span>Em até 6x sem juros</span>
				</Prices>

				<Button title="Clique aqui para continuar com a compra" type="button">
					Continuar com a compra
				</Button>
			</Sidebar>
		</CarContainer>
	)
}
