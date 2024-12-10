import styled from "styled-components"
import { colors } from "../../style"
import { TagContainer } from "../Tag/styles"
import { ButtonContainer } from "../Button/styles"

import close from "../../assets/fechar.png"

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: 0.7;
`

export const CarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	justify-content: flex-end;
	z-index: 1;

	&.is-open {
		display: flex;
	}
`

export const Sidebar = styled.aside`
	background-color: ${colors.gray};
	z-index: 1;
	padding: 40px 16px 0;
	max-width: 360px;
	width: 100%;

	${ButtonContainer} {
		max-width: 100%;
		width: 100%;
	}
`

export const Prices = styled.p`
	font-size: 14px;
	font-weight: bold;
	color: ${colors.white};
	margin-bottom: 24px;

	span {
		display: block;
		font-size: 12px;
		color: ${colors.lightGray};
	}
`

export const Quantity = styled.p`
	font-size: 16px;
	font-weight: bold;
	color: ${colors.white};
	margin-top: 32px;
	margin-bottom: 16px;
`

export const CartItem = styled.li`
	display: flex;
	border-bottom: 1px solid ${colors.lightGray};
	padding: 8px 0;
	position: relative;

	img {
		width: 80px;
		aspect-ratio: 1;
		object-fit: cover;
		margin-right: 24px;
	}

	h3 {
		color: ${colors.white};
		font-weight: bold;
		font-size: 16px;
	}

	span {
		display: block;
		color: ${colors.white};
		font-weight: bold;
		font-size: 14px;
	}

	${TagContainer} {
		margin: 8px 8px 16px 0;
	}

	button {
		background-image: url(${close});
		width: 16px;
		height: 16px;
		border: none;
		background-color: transparent;
		position: absolute;
		top: 8px;
		right: 0;
	}
`
