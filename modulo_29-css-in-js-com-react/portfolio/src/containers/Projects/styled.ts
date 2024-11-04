import styled from 'styled-components'

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 36px;
    row-gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        column-gap: 0;
        row-gap: 16px;
    }
`
