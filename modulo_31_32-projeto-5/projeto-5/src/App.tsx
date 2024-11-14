import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novatarefa',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Container>
      <RouterProvider router={rotas} />
    </Container>
  )
}

export default App
