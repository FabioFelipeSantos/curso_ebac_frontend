import FiltroCard from '../../components/FiltroCard'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { alterarTermo, selectFiltro } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

export default function BarraLateral({ mostrarFiltros }: Props) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { termo } = useAppSelector(selectFiltro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />

            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar à lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}
