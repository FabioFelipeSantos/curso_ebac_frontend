import Project from '../../components/Project'
import Title from '../../components/Title'
import { List } from './styled'

export default function Projects() {
    return (
        <section>
            <Title fontSize={16}>Projects</Title>
            <List>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
                <li>
                    <Project></Project>
                </li>
            </List>
        </section>
    )
}
