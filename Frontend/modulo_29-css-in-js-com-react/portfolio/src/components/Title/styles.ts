import styled from 'styled-components'
import { Props } from '.'

export const TitleStyle = styled.h3<Props>`
    margin-bottom: 16px;
    color: ${props => props.theme.textMainColor};
    font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '14px')};
    font-style: bold;
`
