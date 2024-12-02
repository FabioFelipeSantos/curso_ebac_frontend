import { ButtonContainer, ButtonLink } from "./styles";

type ButtonProps = {
	type: "button" | "link";
	title: string;
	to?: string;
	onClick?: () => void;
	children: string;
};

export default function Button({ title, type, to, onClick, children }: ButtonProps) {
	if (type === "button") {
		return (
			<ButtonContainer
				type={"button"}
				title={title}
				onClick={onClick}>
				{children}
			</ButtonContainer>
		);
	}

	return (
		<ButtonLink
			to={to!}
			title={title}>
			{children}
		</ButtonLink>
	);
}
