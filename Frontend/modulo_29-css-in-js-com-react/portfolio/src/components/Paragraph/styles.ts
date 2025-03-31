import styled from 'styled-components'
import { Props } from '.'

export const ParagraphStyle = styled.p<Props>`
    color: ${props =>
        props.type === 'main'
            ? props.theme.textMainColor
            : props.theme.textSecondaryColor};
    font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '14px')};
    line-height: 22px;
`
