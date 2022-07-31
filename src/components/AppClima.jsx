import useClima from "../hooks/useClima"
import Form from "./Form"
import Resultado from "./Resultado"
import Spinner from './Spinner'


const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Form />

        {cargando ? <Spinner /> :
        resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : null}

      </main>
    </>
  )
}

export default AppClima