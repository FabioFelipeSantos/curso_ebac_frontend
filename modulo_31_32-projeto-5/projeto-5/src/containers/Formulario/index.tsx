import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './style'
import { cadastrar, TarefaNova } from '../../store/reducers/tarefas'
import { Prioridade } from '../../utils/enums/tarefa'
import { useAppDispatch } from '../../store/hooks'

export default function Formulario() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const tarefa: TarefaNova = {
      titulo,
      descricao,
      prioridade
    }

    dispatch(cadastrar(tarefa))
    navigate('/')
  }

  return (
    <>
      <MainContainer>
        <Titulo>Nova Tarefa</Titulo>
        <Form onSubmit={handleSubmit}>
          <Campo
            type="text"
            name=""
            id=""
            placeholder="Título"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            required
          />
          <Campo
            as="textarea"
            name=""
            id=""
            placeholder="Descrição da tarefa"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            required
          ></Campo>
          <Opcoes>
            <p>Prioridade</p>
            {Object.values(Prioridade).map((prioridade) => (
              <Opcao key={prioridade}>
                <input
                  type="radio"
                  name={prioridade}
                  value={prioridade}
                  id={prioridade}
                  onChange={() => setPrioridade(prioridade)}
                  defaultChecked={prioridade === Prioridade.NORMAL}
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
          </Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </MainContainer>
    </>
  )
}
