import React from 'react'
import { ParagraphStyle } from './styles'

export type Props = {
    children: React.ReactNode
    type?: 'main' | 'secondary'
    fontSize?: number
}

export default function Paragraph({
    type = 'main',
    fontSize,
    children
}: Props) {
    return (
        <ParagraphStyle
            fontSize={fontSize}
            type={type}>
            {children}
        </ParagraphStyle>
    )
}
