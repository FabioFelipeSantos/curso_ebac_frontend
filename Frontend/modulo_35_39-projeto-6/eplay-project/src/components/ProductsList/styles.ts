import styled from "styled-components"
import { breakpoints, colors } from "../../style"
import { Card } from "../Product/styled"

type Props = {
	background: string
}

export const ProductsListContainer = styled.section<Props>`
	background-color: ${props => (props.background === "black" ? colors.black : colors.gray)};
	padding: 32px 0;

	${Card} {
		background-color: ${props => (props.background !== "black" ? colors.black : colors.gray)};
	}
`

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	margin-top: 40px;

	@media (max-width: ${breakpoints.desktop}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const ProductsListTitle = styled.h2`
	font-size: 22px;
	font-weight: bold;
`
