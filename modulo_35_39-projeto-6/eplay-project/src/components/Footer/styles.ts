import styled from "styled-components";
import { colors } from "../../style";

export const FooterContainer = styled.footer`
	background-color: ${colors.gray};
	padding: 32px 0;
	font-size: 14px;
`;

export const SectionFooterTitle = styled.h4`
	color: ${colors.white};
	font-size: 16px;
	font-weight: bold;
`;

export const Links = styled.ul`
	display: flex;
	margin-top: 16px;
`;

export const Link = styled.a`
	color: ${colors.lightGray};
	text-decoration: none;
	margin-right: 8px;
`;

export const SectionFooter = styled.div`
	margin-bottom: 64px;
`;

// export const Copyright = styled.p``;
