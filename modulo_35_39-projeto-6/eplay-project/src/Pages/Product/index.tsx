import { useParams } from "react-router-dom"
import Hero from "../../components/Hero"
import Section from "../../components/Section"

import Gallery from "../../components/Gallery"
import { useGetGameQuery } from "../../services/api"
import Loader from "../../components/Loader"

type GameParams = {
	id: string
}

export default function Product() {
	const { id } = useParams() as GameParams

	const { data: game } = useGetGameQuery(id)

	if (!game) {
		return <Loader />
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
