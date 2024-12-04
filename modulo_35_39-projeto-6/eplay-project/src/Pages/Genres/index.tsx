import { useEffect, useState } from "react"

import ProductsList from "../../components/ProductsList"

import { Game } from "../Home"

export default function Genres() {
	const [actionGames, setActionGames] = useState<Game[]>([])
	const [sportsGames, setSportsGames] = useState<Game[]>([])
	const [simulationGames, setSimulationGames] = useState<Game[]>([])
	const [fightGames, setFightGames] = useState<Game[]>([])
	const [rpgGames, setRpgGames] = useState<Game[]>([])

	useEffect(() => {
		fetch("https://fake-api-tau.vercel.app/api/eplay/acao")
			.then(response => response.json())
			.then(data => setActionGames(data))

		fetch("https://fake-api-tau.vercel.app/api/eplay/esportes")
			.then(response => response.json())
			.then(data => setSportsGames(data))

		fetch("https://fake-api-tau.vercel.app/api/eplay/simulacao")
			.then(response => response.json())
			.then(data => setSimulationGames(data))

		fetch("https://fake-api-tau.vercel.app/api/eplay/luta")
			.then(response => response.json())
			.then(data => setFightGames(data))

		fetch("https://fake-api-tau.vercel.app/api/eplay/rpg")
			.then(response => response.json())
			.then(data => setRpgGames(data))
	}, [])
	return (
		<>
			<ProductsList games={actionGames} title="Ação" background="black" />
			<ProductsList games={sportsGames} title="Esportes" background="gray" />
			<ProductsList games={fightGames} title="Luta" background="black" />
			<ProductsList games={rpgGames} title="RPG" background="gray" />
			<ProductsList games={simulationGames} title="Simulação" background="black" />
		</>
	)
}
