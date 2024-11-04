import React from 'react'
import { ParagraphStyle } from './styles'

export type Props = {
    children: React.ReactNode
    type?: 'main' | 'secondary'
}

export default function Paragraph({ type = 'main', children }: Props) {
    return <ParagraphStyle type={type}>{children}</ParagraphStyle>
}
