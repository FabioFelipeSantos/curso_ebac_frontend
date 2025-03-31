import { SectionContainer, SectionTitle } from "./styles"

type Props = {
	title: string
	background: "black" | "gray"
	children: JSX.Element
}

export default function Section({ title, background, children }: Props) {
	return (
		<SectionContainer background={background}>
			<div className="container">
				<SectionTitle>{title}</SectionTitle>
				{children}
			</div>
		</SectionContainer>
	)
}
