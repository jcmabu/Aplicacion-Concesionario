import React from 'react'
import { Link } from 'react-router-dom';

const Registro = () => {
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl text-gray-900 font-extrabold'>Crea tu cuenta</h2>
            <form className='flex flex-col items-center mt-8 w-1/3'>
                <div className=' rounded-md shadow-sm grid grid-cols-2 gap-2'>
                    <label htmlFor='nombre'>
                        Nombre
                        <input type="text"
                        placeholder='Ej: Predro' 
                        name='nombre'
                        required
                        className='border border-gray-300 
                        appearance-none rounded-none relative
                        block w-full px-3 py-2 placeholder-gray-500
                        text-gray-900 rounded-t-md focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        focus:z-10 sm:text-sm'
                        />
                    </label>
                    <label htmlFor='apellido'>
                        Apellido
                        <input type="text"
                        placeholder='Ej: Garcia' 
                        name='apellido'
                        required
                        className='border border-gray-300 
                        appearance-none rounded-none relative
                        block w-full px-3 py-2 placeholder-gray-500
                        text-gray-900 rounded-t-md focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        focus:z-10 sm:text-sm'
                        />
                    </label>
                    <label htmlFor='telefono'>
                        Telefono
                        <input type="tel"
                        placeholder='Ej: 320301448' 
                        name='telefono'
                        required
                        className='border border-gray-300 
                        appearance-none rounded-none relative
                        block w-full px-3 py-2 placeholder-gray-500
                        text-gray-900 rounded-t-md focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        focus:z-10 sm:text-sm'
                        />
                    </label>
                    <label htmlFor='fecha'>
                        Fecha de Nacimiento
                        <input type="datetime-local"                     
                        name='fecha'
                        required
                        className='border border-gray-300 
                        appearance-none rounded-none relative
                        block w-full px-3 py-2 placeholder-gray-500
                        text-gray-900 rounded-t-md focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        focus:z-10 sm:text-sm'
                        />
                    </label>
                    <label htmlFor='correo'>
                        Correo eletronico
                        <input type="email"                     
                        name='correo'
                        placeholder='lsa@gmail.com'
                        required
                        className='border border-gray-300 
                        appearance-none rounded-none relative
                        block w-full px-3 py-2 placeholder-gray-500
                        text-gray-900 rounded-t-md focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        focus:z-10 sm:text-sm'
                        />
                    </label>
                    <label htmlFor='correo'>
                        Contraseña
                        <input type="password"                     
                        name='correo'                     
                        required
                        className='border border-gray-300 
                        appearance-none rounded-none relative
                        block w-full px-3 py-2 placeholder-gray-500
                        text-gray-900 rounded-t-md focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        focus:z-10 sm:text-sm'
                        />
                    </label>
                </div>
                <div className='m-3'>
                <button className='group relative 
                w-full flex justify-center py-2 px-4
                 border border-transparent text-sm 
                 font-medium rounded-md text-white 
                 bg-indigo-600 hover:bg-indigo-700 
                 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 
                 focus:ring-indigo-500'
                 type='button'>
                     <Link to='/admin'>
                     Registrate
                     </Link>
                     </button>
                </div>
                <div className='flex items-center justify-between'>
                    <span>¿ ya tienes cuenta?</span>
                    <Link to='/login'>
                        <span className='font-medium text-indigo-600 hover:text-indigo-500 mx-3'>Inicia Sesion</span>
                    </Link>
                </div>
            </form>
            
        </div>
    )
}

export default Registro;
