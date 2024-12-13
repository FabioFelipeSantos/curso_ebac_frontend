import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import { HeaderBar, CartButton, LinkItem, Links, Hamburger, HeaderRow, NavMobile } from "./styles"
import logo from "./../../assets/logo.svg"
import cart from "./../../assets/carrinho.svg"
import { open } from "../../store/reducers/cart"
import { RootReducer } from "../../store"

export default function Header() {
	const dispatch = useDispatch()
	const { items } = useSelector((state: RootReducer) => state.cart)

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const openCart = () => {
		dispatch(open())
	}

	// https://fake-api-tau.vercel.app/api/eplay/checkout
	return (
		<HeaderBar>
			<HeaderRow>
				<div>
					<Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<span />
						<span />
						<span />
					</Hamburger>
					<Link to="/">
						<img src={logo} alt="EPlay" />
					</Link>
					<nav>
						<Links>
							<LinkItem>
								<Link title="Clique aqui para acessar a página de gêneros" to="/genres">
									Gêneros
								</Link>
							</LinkItem>
							<LinkItem>
								<HashLink
									title="Clique aqui para acessar a seção de em breve"
									to="/#coming-soon">
									Em breve
								</HashLink>
							</LinkItem>
							<LinkItem>
								<HashLink
									title="Clique aqui para acessar a seção de promoções"
									to="/#on-sale">
									Promoções
								</HashLink>
							</LinkItem>
						</Links>
					</nav>
				</div>
				<CartButton onClick={openCart}>
					{items.length}
					<span> - produtos(s)</span>
					<img src={cart} alt="Store cart" />
				</CartButton>
			</HeaderRow>

			<NavMobile className={isMenuOpen ? "is-open" : ""}>
				<Links>
					<LinkItem>
						<Link
							onClick={() => setIsMenuOpen(false)}
							title="Clique aqui para acessar a página de gêneros"
							to="/genres">
							Gêneros
						</Link>
					</LinkItem>
					<LinkItem>
						<HashLink
							onClick={() => setIsMenuOpen(false)}
							title="Clique aqui para acessar a seção de em breve"
							to="/#coming-soon">
							Em breve
						</HashLink>
					</LinkItem>
					<LinkItem>
						<HashLink
							onClick={() => setIsMenuOpen(false)}
							title="Clique aqui para acessar a seção de promoções"
							to="/#on-sale">
							Promoções
						</HashLink>
					</LinkItem>
				</Links>
			</NavMobile>
		</HeaderBar>
	)
}
