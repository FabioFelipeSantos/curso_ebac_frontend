import { useAppDispatch, useAppSelector } from '../../store/hooks'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { alterarFiltro, selectFiltro } from '../../store/reducers/filtro'
import { selectNumeroTarefasPeloFiltro } from '../../store/reducers/tarefas'

export type CardProps = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

export default function FiltroCard({ legenda, criterio, valor }: CardProps) {
  const dispatch = useAppDispatch()
  const filtro = useAppSelector(selectFiltro)
  const numeroTarefas = useAppSelector((state) =>
    selectNumeroTarefasPeloFiltro(state, {
      criterio,
      valor
    })
  )

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  return (
    <S.Card ativo={verificaEstaAtivo()} onClick={filtrar}>
      <S.Contador>{numeroTarefas}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
