import React from 'react'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll my-5'>
        <h2 className='font-black text-3xl text-center'>Lista Pacientes</h2>
        <p className='text-3xl mt-5 mb-10 text-center'>
            Administra tus {""}
            <span className='text-green-500 font-bold'>Pacientes y Citas</span>
        </p>
    </div>
  )
}

export default ListadoPacientes