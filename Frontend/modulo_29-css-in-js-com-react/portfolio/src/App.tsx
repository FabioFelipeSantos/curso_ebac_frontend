import { ThemeProvider } from 'styled-components'
import About from './containers/About'
import Projects from './containers/Projects'
import SideBar from './containers/SideBar'
import Reset, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
    const [themeIsDark, setThemeIsDark] = useState(false)

    function handleChangeTheme() {
        setThemeIsDark(!themeIsDark)
    }

    return (
        <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
            <Reset />
            <Container>
                <SideBar onClickButton={handleChangeTheme} />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </ThemeProvider>
    )
}

export default App
