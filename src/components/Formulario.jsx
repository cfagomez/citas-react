import React from 'react'
import Error from './Error'

const Formulario = ({setListaPacientes, listaPacientes}) => {

    const [nombre, setNombre] = React.useState('')
    const [cuidador, setCuidador] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [fecha, setFecha] = React.useState('')
    const [sintomas, setSintomas] = React.useState('')
    const [error, setError] = React.useState(null)

    const validarFormulario = (e) => {

        e.preventDefault()

        if ([nombre, cuidador, email, fecha, sintomas].includes('')) {

            setError('Hay al menos un campo vacio')

            return

        }

        setError(null)

        const objetoPaciente = {
            nombre,
            cuidador,
            email,
            fecha,
            sintomas
        }

        setListaPacientes(...listaPacientes, objetoPaciente)

    }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center mt-5 mb-5'>Seguimiento Pacientes</h2>
        <p className='text-3xl text-center'>
            Añade pacientes y {""}
            <span className='text-green-500'>Administralos</span>
        </p>
        {
            error ? (
                <Error error={error}/>
            ) : (
                null
            )
        }
        <form 
            className='bg-white shadow-md rounded-md py-10 px-5 mb-10'
            onSubmit={validarFormulario}
        >
            <div className='mb-5'>
                <label 
                    htmlFor="nombre"
                    className='block text-gray-700 uppercase font-bold'
                >
                    Nombre
                </label>
                <input 
                    type="text"
                    placeholder='Nombre'
                    id='nombre'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor="cuidador"
                    className='block text-gray-700 uppercase font-bold'
                >
                    Cuidador
                </label>
                <input 
                    type="text"
                    placeholder='Cuidador'
                    id='cuidador'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={(e) => setCuidador(e.target.value)}
                    value={cuidador}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor="email"
                    className='block text-gray-700 uppercase font-bold'
                >
                    Email
                </label>
                <input 
                    type="email"
                    placeholder='Email'
                    id='email'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor="fecha"
                    className='block text-gray-700 uppercase font-bold'
                >
                    Fecha
                </label>
                <input 
                    type="date"
                    placeholder='Fecha'
                    id='fecha'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={(e) => setFecha(e.target.value)}
                    value={fecha}
                />
            </div>
            <div>
                <label 
                    htmlFor="sintomas"
                    className='block text-gray-700 uppercase font-bold'
                >
                    Sintomas
                </label>
                <textarea
                    placeholder='Sintomas'
                    id='sintomas'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={(e) => setSintomas(e.target.value)}
                    value={sintomas}
                />
            </div>
            <button
                type='submit'
                className='bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-800 cursor-pointer rounded-md transition-all mt-2'
            >
                Agregar paciente
            </button>
        </form>
    </div>
  )
}

export default Formulario