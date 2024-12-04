import Tag from "../Tag"

import * as S from "./styled"

type Props = {
	title: string
	genre: string
	system: string
	description: string
	infos: string[]
	image: string
	id: number
}

export default function Product({ id, title, genre, system, description, infos, image }: Props) {
	const getDescription = (description: string) => {
		if (description.length > 95) {
			return description.slice(0, 92) + "..."
		}

		return description
	}
	return (
		<S.Card to={`/product/${id}`}>
			<img src={image} alt={title} />
			<S.Infos>
				{infos.map(info => (
					<Tag key={info}>{info}</Tag>
				))}
			</S.Infos>
			<S.GameTitle>{title}</S.GameTitle>
			<Tag>{genre}</Tag>
			<Tag>{system}</Tag>
			<S.Description>{getDescription(description)}</S.Description>
		</S.Card>
	)
}
