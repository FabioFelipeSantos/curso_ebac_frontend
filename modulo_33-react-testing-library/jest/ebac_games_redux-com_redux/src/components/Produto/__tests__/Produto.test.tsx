import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'Rpg',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwards Legacy'
}

describe('Testes para o componente produto', () => {
  it('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />, { preloadState: {} })
    expect(screen.getByText('Hogwards Legacy')).toBeInTheDocument()
  })

  it('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />, {
      preloadState: {}
    })
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
