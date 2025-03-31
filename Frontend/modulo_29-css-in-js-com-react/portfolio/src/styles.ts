import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const Reset = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        list-style: none;
    }

    body {
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: ${props => (props.theme as Theme).bgColor};

        @media (max-width: 768px) {
            padding-top: 16px;
        }
    }
`

export default Reset

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 56px;

    img {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
    }
`
