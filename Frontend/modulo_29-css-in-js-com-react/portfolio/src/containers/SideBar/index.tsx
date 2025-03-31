import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, Button, SideBarContainer } from './styles'

type Props = {
    onClickButton(): void
}
export default function SideBar({ onClickButton }: Props) {
    return (
        <aside>
            <SideBarContainer>
                <Avatar />
                <Title fontSize={20}>Fábio Santos</Title>
                <Paragraph
                    type="secondary"
                    fontSize={16}>
                    /FabioFelipeSantos
                </Paragraph>
                <Description
                    type="main"
                    fontSize={12}>
                    Engenheiro Fullstack
                </Description>
                <Button onClick={onClickButton}>Trocar Tema</Button>
            </SideBarContainer>
        </aside>
    )
}
