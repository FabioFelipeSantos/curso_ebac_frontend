import styled from 'styled-components'
import { Props } from '.'

export const ParagraphStyle = styled.p<Props>`
    color: ${props => (props.type === 'main' ? '#282a35' : '#949494')};
    font-size: 14px;
    line-height: 22px;
`
