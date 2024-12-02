import { createGlobalStyle } from "styled-components";

export const colors = {
	white: "#eee",
	black: "#111",
	gray: "#333",
	lightGray: "#a3a3a3",
	green: "#10ac84",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${colors.black};
        color: ${colors.white};
        padding-top: 40px;
    }

    li {
        list-style: none;
    }

    .container {
        max-width: 1024px;
	    width: 100%;
	    margin: 0 auto;
    }
`;
