import React, { useEffect, useState } from 'react'

import * as S from './styles'
import { useAppDispatch } from '../../store/hooks'
import {
  remover,
  editar,
  Tarefa as TarefaType,
  alteraStatus
} from '../../store/reducers/tarefas'
import { Botao, BotaoSalvar } from '../../styles'
import { Status } from '../../utils/enums/tarefa'

type Props = TarefaType

export default function Tarefa({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) {
  const dispatch = useAppDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [finalizado, setFinalizado] = useState(Status.PENDENTE)

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function removerTarefa() {
    dispatch(remover(id))
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function salvarEdicao() {
    setEstaEditando(false)
    dispatch(editar({ id, descricao }))
  }

  function handleFinalizado(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setFinalizado(Status.CONCLUIDA)
    } else {
      setFinalizado(Status.PENDENTE)
    }

    dispatch(alteraStatus({ id, finalizado }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          name={titulo}
          id={titulo}
          checked={status === Status.CONCLUIDA}
          onChange={handleFinalizado}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={removerTarefa}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
