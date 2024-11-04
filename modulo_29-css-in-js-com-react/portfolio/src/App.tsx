import About from './containers/About'
import Projects from './containers/Projects'
import SideBar from './containers/SideBar'
import Reset, { Container } from './styles'

function App() {
    return (
        <>
            <Reset />
            <Container>
                <SideBar />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </>
    )
}

export default App
