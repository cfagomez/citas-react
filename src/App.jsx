import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import React from "react"

function App() {

  const [listaPacientes, setListaPacientes] = React.useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          setListaPacientes={setListaPacientes}
          listaPacientes={listaPacientes}
        />
        <ListadoPacientes />
      </div> 
    </div>
  )
}

export default App
