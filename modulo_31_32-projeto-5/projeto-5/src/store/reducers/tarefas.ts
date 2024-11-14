import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

export interface Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number
}

type TarefaEditada = Pick<Tarefa, 'id' | 'descricao'>

const initialState: Tarefa[] = [
  {
    titulo: 'Estudar JavaScript',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA,
    descricao: 'Rever REGEX',
    id: 1
  },
  {
    titulo: 'Estudar TypeScript',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE,
    descricao: 'Rever aula 2 do módulo',
    id: 2
  },
  {
    titulo: 'Estudar React',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Praticar o useEffect',
    id: 3
  }
]

import type { FiltroState } from './filtro'
type FiltroParaNumeroTarefas = Pick<FiltroState, 'criterio' | 'valor'>

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<TarefaEditada>) => {
      console.log(state)
      const { id, descricao } = action.payload
      const tarefaExistente = state.find((task) => task.id === id)

      if (tarefaExistente) {
        tarefaExistente.descricao = descricao
      }
    }
  },
  selectors: {
    selectTarefas: (tarefas) => tarefas,
    selectNumeroTarefasPeloFiltro: (
      tarefas,
      { criterio, valor }: FiltroParaNumeroTarefas
    ) => {
      if (criterio === 'todas') {
        return tarefas.length
      } else if (criterio === 'prioridade') {
        return tarefas.filter((tarefa) => tarefa.prioridade === valor).length
      } else {
        return tarefas.filter((tarefa) => tarefa.status === valor).length
      }
    }
  }
})

export default tarefasSlice.reducer

export const { remover, editar } = tarefasSlice.actions

export const { selectTarefas, selectNumeroTarefasPeloFiltro } =
  tarefasSlice.selectors
