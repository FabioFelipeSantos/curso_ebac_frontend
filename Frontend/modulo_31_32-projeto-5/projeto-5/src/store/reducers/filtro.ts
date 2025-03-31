import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/tarefa'

export type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, { payload }: PayloadAction<FiltroState>) => {
      state.criterio = payload.criterio
      state.valor = payload.valor
    }
  },
  selectors: {
    selectFiltro: (state) => state
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export const { selectFiltro } = filtroSlice.selectors
export default filtroSlice.reducer
