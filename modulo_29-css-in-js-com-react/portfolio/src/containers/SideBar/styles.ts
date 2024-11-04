import styled from 'styled-components'
import { ParagraphStyle } from '../../components/Paragraph/styles'

export const Description = styled(ParagraphStyle)`
    margin: 24px 0 40px;
`
export const Button = styled.button`
    border-radius: 12px;
    padding: 8px;
    color: ${props => props.theme.bgColor};
    font-size: 10px;
    font-weight: bold;
    background-color: ${props => props.theme.textMainColor};
    &:hover {
        cursor: pointer;
    }
`
export const SideBarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;

    @media (max-width: 768px) {
        margin-bottom: 40px;
        text-align: center;
    }
`
