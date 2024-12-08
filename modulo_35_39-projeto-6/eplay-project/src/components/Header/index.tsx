import { Link } from "react-router-dom"
import { HeaderBar, LinkCart, LinkItem, Links } from "./styles"

import logo from "./../../assets/logo.svg"
import cart from "./../../assets/carrinho.svg"

export default function Header() {
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
			<LinkCart href="#">
				0 - produtos(s)
				<img src={cart} alt="Store cart" />
			</LinkCart>
		</HeaderBar>
	)
}
