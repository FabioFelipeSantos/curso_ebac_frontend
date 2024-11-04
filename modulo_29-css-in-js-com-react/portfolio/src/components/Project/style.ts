import styled from 'styled-components'

export const Card = styled.div`
    border: 1px solid ${props => props.theme.borderColor};
    padding: 16px;
`

export const ButtonLink = styled.a`
    margin: 24px 0;
    display: inline-block;
    color: ${props => props.theme.bgColor};
    font-size: 14px;
    background-color: ${props => props.theme.bgButtonColor};
    text-decoration: none;
    padding: 8px;
`
