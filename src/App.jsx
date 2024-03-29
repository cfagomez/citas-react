import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import React from "react"

function App() {

  const [listaPacientes, setListaPacientes] = React.useState([])
  const [pacienteEditar, setPacienteEditar] = React.useState('')
  const [modoEdicion, setModoEdicion] = React.useState(false)

  React.useEffect (() => {

    if (localStorage.getItem('listaPacientes')) {

      const listaPacientesLocalStorage = JSON.parse(localStorage.getItem('listaPacientes'))
      setListaPacientes(listaPacientesLocalStorage)

    }

  }, [])

  React.useEffect(() => {

    localStorage.setItem('listaPacientes', JSON.stringify(listaPacientes))

  }, [listaPacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          setListaPacientes={setListaPacientes}
          listaPacientes={listaPacientes}
          pacienteEditar={pacienteEditar}
          setPacienteEditar={setPacienteEditar}
          setModoEdicion={setModoEdicion}
          modoEdicion={modoEdicion}
        />
        <ListadoPacientes
          listaPacientes={listaPacientes}
          pacienteEditar={pacienteEditar}
          setPacienteEditar={setPacienteEditar}
          setModoEdicion={setModoEdicion}
          setListaPacientes={setListaPacientes}
        />
      </div> 
    </div>
  )
}

export default App
