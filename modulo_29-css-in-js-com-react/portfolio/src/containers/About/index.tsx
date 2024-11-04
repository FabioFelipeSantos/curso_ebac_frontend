import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

export default function About() {
    return (
        <section>
            <Title fontSize={16}>About</Title>

            <Paragraph type="main">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                unde in velit porro nihil sed iure, eveniet voluptas amet cum
                sapiente dolorum, tempora rerum, eaque esse vero laborum eum
                quasi. Consequatur architecto repudiandae, obcaecati quod sed
                minima pariatur! Consequatur voluptates itaque ratione maxime
                minus vero iste quod architecto sed natus, aspernatur, dolore,
                hic non ullam ipsum! Quidem dolores perspiciatis reiciendis?
            </Paragraph>

            <GithubSection>
                <img src="https://github-readme-stats.vercel.app/api?username=FabioFelipeSantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FabioFelipeSantos&layout=compact&langs_count=7&theme=dracula" />
            </GithubSection>
        </section>
    )
}
