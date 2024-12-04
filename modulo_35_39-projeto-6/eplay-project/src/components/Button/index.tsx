import { ButtonContainer, ButtonLink } from "./styles"

export type ButtonProps = {
	type: "button" | "link"
	title: string
	to?: string
	onClick?: () => void
	children: string
	variant?: "primary" | "secondary"
}

export default function Button({ title, type, to, onClick, children, variant = "primary" }: ButtonProps) {
	if (type === "button") {
		return (
			<ButtonContainer variant={variant} type={"button"} title={title} onClick={onClick}>
				{children}
			</ButtonContainer>
		)
	}

	return (
		<ButtonLink to={to!} title={title}>
			{children}
		</ButtonLink>
	)
}
