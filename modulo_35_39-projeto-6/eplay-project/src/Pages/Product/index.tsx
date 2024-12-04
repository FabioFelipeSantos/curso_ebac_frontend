import { useParams } from "react-router-dom"
import Hero from "../../components/Hero"
import Section from "../../components/Section"

import Gallery from "../../components/Gallery"

import { useEffect, useState } from "react"
import { Game } from "../Home"

export default function Product() {
	const { id } = useParams()

	const [game, setGame] = useState<Game>()

	useEffect(() => {
		fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
			.then(response => response.json())
			.then(data => setGame(data))
	}, [id])

	if (!game) {
		return <h3 className="container">Carregando...</h3>
	}

	const { developer, languages, publisher, system } = game.details
	return (
		<>
			<Hero game={game} />

			<Section title="Sobre o jogo" background="black">
				<p>{game.description}</p>
			</Section>

			<Section title="Outros Detalhes" background="gray">
				<p>
					<b>Plataforma</b>: {system}
					<br />
					<b>Desenvolvedor</b>: {developer}
					<br />
					<b>Editora</b>: {publisher}
					<br />
					<b>Idiomas</b>: O jogo oferece suporte a vários idiomas, incluindo:{" "}
					{`${languages.join(", ")}`}.
				</p>
			</Section>

			<Gallery name={game.name} defaultCover={game.media.cover} items={game.media.gallery} />
		</>
	)
}
