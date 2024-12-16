import ProductsList from "../../components/ProductsList"

import {
	useGetActionGamesQuery,
	useGetFightGamesQuery,
	useGetRpgGamesQuery,
	useGetSimulationGamesQuery,
	useGetSportsGamesQuery,
} from "../../services/api"

export default function Genres() {
	const { data: actionGames, isLoading: isLoadingAction } = useGetActionGamesQuery()
	const { data: sportsGames, isLoading: isLoadingSports } = useGetSportsGamesQuery()
	const { data: simulationGames, isLoading: isLoadingSimulations } = useGetSimulationGamesQuery()
	const { data: fightGames, isLoading: isLoadingFight } = useGetFightGamesQuery()
	const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

	return (
		<>
			<ProductsList
				games={actionGames}
				title="Ação"
				background="black"
				id="action"
				isLoading={isLoadingAction}
			/>
			<ProductsList
				games={sportsGames}
				title="Esportes"
				background="gray"
				id="sports"
				isLoading={isLoadingSports}
			/>
			<ProductsList
				games={fightGames}
				title="Luta"
				background="black"
				id="fight"
				isLoading={isLoadingSimulations}
			/>
			<ProductsList
				games={rpgGames}
				title="RPG"
				background="gray"
				id="rpg"
				isLoading={isLoadingFight}
			/>
			<ProductsList
				games={simulationGames}
				title="Simulação"
				background="black"
				id="simulation"
				isLoading={isLoadingRpg}
			/>
		</>
	)
}
