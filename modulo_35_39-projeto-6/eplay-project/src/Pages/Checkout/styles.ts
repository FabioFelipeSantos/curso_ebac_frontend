import styled from "styled-components"
import { colors } from "../../style"

type RowProps = {
	marginTop?: string
}

export const Row = styled.div<RowProps>`
	display: flex;
	column-gap: 24px;
	margin-top: ${props => props.marginTop || "0"};
	align-items: flex-end;
`

type InputGroupProps = {
	maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
	flex: auto;
	max-width: ${props => props.maxWidth || "auto"};

	label {
		font-size: 14px;
		margin-bottom: 8px;
		display: block;
	}

	input,
	select {
		background-color: ${colors.white};
		height: 32px;
		padding: 8px;
		border: 1px solid ${colors.white};
		width: 100%;
	}
`

type TabButtonProps = {
	isActive: boolean
	type: "button"
}

export const TabButton = styled.button<TabButtonProps>`
	border-radius: 8px;
	font-size: 14px;
	font-weight: bold;
	color: ${colors.white};
	background-color: ${props => (props.isActive ? colors.green : colors.black)};
	height: 32px;
	border: none;
	margin-right: 16px;
	padding: 0 8px;

	display: inline-flex;
	align-items: center;

	img {
		margin-right: 8px;
	}

	&:hover {
		cursor: pointer;
	}
`
