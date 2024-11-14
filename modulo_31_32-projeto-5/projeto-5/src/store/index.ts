import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefaReducer,
    filtro: filtroReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
