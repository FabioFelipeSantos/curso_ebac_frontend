import styled from "styled-components"
import { colors } from "../../style"
import { TagContainer } from "../Tag/styles"

export const Banner = styled.div`
	padding-top: 16px;
	height: 480px;
	width: 100%;
	display: block;

	background-size: 100%;
	background-repeat: no-repeat;
	background-position: center;

	position: relative;

	&::after {
		position: absolute;
		background-color: #000;
		opacity: 0.56;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		content: "";
	}

	.container {
		position: relative;
		z-index: 1;

		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}

	${TagContainer} {
		margin-right: 8px;
	}
`

export const Infos = styled.div`
	padding: 16px;
	max-width: 290px;
	background-color: ${colors.black};

	font-weight: bold;

	h2 {
		font-size: 32px;
	}

	p {
		font-size: 18px;
		margin: 16px 0;

		span {
			text-decoration: line-through;
			display: block;
		}
	}
`
