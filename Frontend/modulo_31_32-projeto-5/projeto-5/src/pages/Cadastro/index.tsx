import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

export default function Cadastro() {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />

      <Formulario />
    </>
  )
}
