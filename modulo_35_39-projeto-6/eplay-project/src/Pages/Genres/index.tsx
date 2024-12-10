import ProductsList from "../../components/ProductsList"

import {
	useGetActionGamesQuery,
	useGetFightGamesQuery,
	useGetRpgGamesQuery,
	useGetSimulationGamesQuery,
	useGetSportsGamesQuery,
} from "../../services/api"

export default function Genres() {
	const { data: actionGames } = useGetActionGamesQuery()
	const { data: sportsGames } = useGetSportsGamesQuery()
	const { data: simulationGames } = useGetSimulationGamesQuery()
	const { data: fightGames } = useGetFightGamesQuery()
	const { data: rpgGames } = useGetRpgGamesQuery()

	if (!actionGames || !sportsGames || !simulationGames || !fightGames || !rpgGames) {
		return <h4 className="container">Jogos não encontrados</h4>
	}

	return (
		<>
			<ProductsList games={actionGames} title="Ação" background="black" id="action" />
			<ProductsList games={sportsGames} title="Esportes" background="gray" id="sports" />
			<ProductsList games={fightGames} title="Luta" background="black" id="fight" />
			<ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
			<ProductsList games={simulationGames} title="Simulação" background="black" id="simulation" />
		</>
	)
}
