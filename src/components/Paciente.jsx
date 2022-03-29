import React from 'react'

const Paciente = ({itemPaciente, setPacienteEditar, setModoEdicion, idPaciente, listaPacientes, setListaPacientes}) => {

    const activarModoEdicion = (() => {

        setModoEdicion(true)
        setPacienteEditar(itemPaciente)

    })

    const eliminarPaciente = () => {

        const listaPacienteActualizada = listaPacientes.filter( itemPaciente => itemPaciente.id !== idPaciente)
        setListaPacientes(listaPacienteActualizada)

    }

  return (
    <div className='mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {""}
            <span className='font-normal normal-case'>{itemPaciente.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Cuidador: {""}
            <span className='font-normal normal-case'>{itemPaciente.cuidador}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {""}
            <span className='font-normal normal-case'>{itemPaciente.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha: {""}
            <span className='font-normal normal-case'>{itemPaciente.fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {""}
            <span className='font-normal normal-case'>{itemPaciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                className="py-2 px-10 bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase rounded-lg"
                type='button'
                onClick={activarModoEdicion}
            >
                Editar
            </button>
            <button
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                type='button'
                onClick={eliminarPaciente}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente