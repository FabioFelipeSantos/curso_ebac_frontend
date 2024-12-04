import styled from "styled-components"
import { colors } from "../../style"
import { Link } from "react-router-dom"
import { ButtonProps } from "."

type ButtonStyleProps = {
	variant: NonNullable<ButtonProps["variant"]>
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
	border: 2px solid ${props => (props.variant === "primary" ? colors.green : colors.white)};
	color: ${colors.white};
	background-color: ${props => (props.variant === "primary" ? colors.green : "transparent")};
	font-size: 16px;
	font-weight: bold;
	padding: 8px 16px;
	border-radius: 8px;
`

export const ButtonLink = styled(Link)`
	border: 2px solid ${colors.white};
	color: ${colors.white};
	background-color: transparent;
	font-size: 16px;
	font-weight: bold;
	padding: 8px 16px;
	text-decoration: none;
	border-radius: 8px;
`
