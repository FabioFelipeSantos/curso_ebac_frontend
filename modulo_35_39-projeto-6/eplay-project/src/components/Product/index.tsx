import Tag from "../Tag";

import * as S from "./styled";

type Props = {
	title: string;
	genre: string;
	system: string;
	description: string;
	infos: string[];
	image: string;
};

export default function Product({ title, genre, system, description, infos, image }: Props) {
	return (
		<S.Card>
			<img
				src={image}
				alt={title}
			/>
			<S.Infos>
				{infos.map((info) => (
					<Tag key={info}>{info}</Tag>
				))}
			</S.Infos>
			<S.GameTitle>{title}</S.GameTitle>
			<Tag>{genre}</Tag>
			<Tag>{system}</Tag>
			<S.Description>{description}</S.Description>
		</S.Card>
	);
}
