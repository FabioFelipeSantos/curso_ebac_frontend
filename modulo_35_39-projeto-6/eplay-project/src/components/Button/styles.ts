import styled from "styled-components";
import { colors } from "../../style";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
	border: 2px solid ${colors.white};
	color: ${colors.white};
	background-color: transparent;
	font-size: 16px;
	font-weight: bold;
	padding: 8px 16px;
`;

export const ButtonLink = styled(Link)`
	border: 2px solid ${colors.white};
	color: ${colors.white};
	background-color: transparent;
	font-size: 16px;
	font-weight: bold;
	padding: 8px 16px;
	text-decoration: none;
	border-radius: 8px;
`;
