import { render, RenderOptions } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import React, { PropsWithChildren } from 'react'
import { AppStore, configuraStore, RootState } from '../store'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadState = {},
    store = configuraStore(preloadState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
