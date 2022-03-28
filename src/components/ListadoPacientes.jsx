import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({listaPacientes, pacienteEditar, setPacienteEditar, setModoEdicion}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll my-5'>
        <h2 className='font-black text-3xl text-center'>Lista Pacientes</h2>
        <p className='text-3xl mt-5 mb-10 text-center'>
            Administra tus {""}
            <span className='text-green-500 font-bold'>Pacientes y Citas</span>
        </p>
        {
          listaPacientes.map( itemPaciente => (
            <Paciente 
              key={itemPaciente.id}
              itemPaciente={itemPaciente}
              pacienteEditar={pacienteEditar}
              setPacienteEditar={setPacienteEditar}
              setModoEdicion={setModoEdicion}
            />
          ))
        }
    </div>
  )
}

export default ListadoPacientes