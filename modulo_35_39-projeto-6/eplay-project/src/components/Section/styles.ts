import styled from "styled-components"
import { colors } from "../../style"
import { Card } from "../Product/styled"

type Props = {
	background: string
}

export const SectionContainer = styled.section<Props>`
	background-color: ${props => (props.background === "black" ? colors.black : colors.gray)};
	padding: 32px 0;

	${Card} {
		background-color: ${props => (props.background !== "black" ? colors.black : colors.gray)};
	}

	p {
		font-size: 14px;
		line-height: 22px;
		max-width: 640px;
	}
`

export const SectionTitle = styled.h2`
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 40px;
`
