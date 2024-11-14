import { useEffect, useState } from 'react'

import * as S from './styles'
import { useAppDispatch } from '../../store/hooks'
import {
  remover,
  editar,
  Tarefa as TarefaType
} from '../../store/reducers/tarefas'

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

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
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
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={removerTarefa}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
