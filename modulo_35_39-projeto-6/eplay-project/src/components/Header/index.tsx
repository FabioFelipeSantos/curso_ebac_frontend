import { Link } from "react-router-dom"
import { HeaderBar, CartButton, LinkItem, Links } from "./styles"

import logo from "./../../assets/logo.svg"
import cart from "./../../assets/carrinho.svg"
import { useDispatch, useSelector } from "react-redux"
import { open } from "../../store/reducers/cart"
import { RootReducer } from "../../store"

export default function Header() {
	const dispatch = useDispatch()
	const { items } = useSelector((state: RootReducer) => state.cart)

	const openCart = () => {
		dispatch(open())
	}
	return (
		<HeaderBar>
			<div>
				<Link to="/">
					<img src={logo} alt="EPlay" />
				</Link>
				<nav>
					<Links>
						<LinkItem>
							<Link to="/genres">Gêneros</Link>
						</LinkItem>
						<LinkItem>
							<a href="#">Em breve</a>
						</LinkItem>
						<LinkItem>
							<a href="#">Promoções</a>
						</LinkItem>
					</Links>
				</nav>
			</div>
			<CartButton onClick={openCart}>
				{items.length} - produtos(s)
				<img src={cart} alt="Store cart" />
			</CartButton>
		</HeaderBar>
	)
}
