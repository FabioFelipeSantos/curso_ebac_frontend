import React from 'react'
import { TitleStyle } from './styles'

export type Props = {
    children: React.ReactNode
    fontSize?: number
}

export default function Title(props: Props) {
    return <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
}
