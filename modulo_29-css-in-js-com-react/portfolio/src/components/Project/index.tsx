import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, ButtonLink } from './style'

export default function Project() {
    return (
        <Card>
            <Title>Project Name</Title>
            <Paragraph type="secondary">Description of the project!</Paragraph>
            <ButtonLink>Go to GitHub</ButtonLink>
        </Card>
    )
}
