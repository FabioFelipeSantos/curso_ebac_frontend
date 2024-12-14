import { ButtonContainer, ButtonLink } from "./styles"

export type ButtonProps = {
	type: "button" | "link"
	title: string
	to?: string
	onClick?: () => void
	children: string
	variant?: "primary" | "secondary"
	disabled?: boolean
}

export default function Button({
	title,
	type,
	to,
	onClick,
	children,
	variant = "primary",
	disabled,
}: ButtonProps) {
	if (type === "button") {
		return (
			<ButtonContainer
				variant={variant}
				type={"button"}
				title={title}
				onClick={onClick}
				disabled={disabled}>
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
