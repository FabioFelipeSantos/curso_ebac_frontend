import { screen, waitFor } from '@testing-library/react'
import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const mocks = [
  {
    id: 1,
    categoria: 'Rpg',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 199.9,
    titulo: 'Elden Ring'
  },
  {
    id: 2,
    categoria: 'Rpg',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
    preco: 199.9,
    precoAntigo: 299.9,
    titulo: 'Hogwards Legacy'
  },
  {
    id: 3,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['PS5', 'Xbox Series S/X'],
    preco: 150,
    precoAntigo: 200,
    titulo: 'Gotham Knights'
  },
  {
    id: 4,
    categoria: 'Aventura',
    imagem: '',
    plataformas: ['Nintendo Switch'],
    preco: 189.9,
    precoAntigo: 299.9,
    titulo: 'Donkey Kong'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('Deve renderizar corretamente com o texto de carregamento', () => {
    renderizaComProvider(<Produtos />, {})
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  it('Deve renderizar corretamente', async () => {
    const { debug } = renderizaComProvider(<Produtos />, {})
    await waitFor(() => {
      debug()
      expect(screen.getByText('Elden Ring')).toBeInTheDocument()
    })
  })
})
