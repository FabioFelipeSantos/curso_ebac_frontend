import Game from "../../models/Game";
import Product from "../Product";
import { List, ProductsListContainer, ProductsListTitle } from "./styles";

type Props = {
	title: string;
	background: "gray" | "black";
	games: Game[];
};

export default function ProductsList({ title, background, games }: Props) {
	return (
		<ProductsListContainer background={background}>
			<div className="container">
				<ProductsListTitle>{title}</ProductsListTitle>
				<List>
					{games.map((game) => (
						<Product
							key={game.id}
							title={game.title}
							description={game.description}
							genre={game.genre}
							image={game.image}
							infos={game.infos}
							system={game.system}
						/>
					))}
				</List>
			</div>
		</ProductsListContainer>
	);
}
