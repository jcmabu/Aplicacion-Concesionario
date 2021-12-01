import React from 'react'
import logoGoogle from '../media/logoGoogle.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesion en tu cuenta</h2>
            <form className='mt-8 max-w-md'>
                <div className='flex flex-col'>
                    <input className='appearance-none px-3 py-2 m-2 focus:outline-none border border-gray-300 text-gray-900 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' placeholder='lst@c.com' required/>
                    <input className='appearance-none px-3 py-2 m-2 focus:outline-none border border-gray-300 text-gray-900 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='email' type='password' required/>
                </div>
                <div className='flex justify-between' >
                    <div>
                        <label htmlFor='recuerdame'>
                            <input type='checkbox' name='recuerdame'/>
                            Recuerdame
                        </label>
                    </div>
                    <div className='px-2 text-indigo-500'>
                        <Link to='/'>
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-2'>
                    <div>
                        <Link to='/admin'>
                            <button className='bg-indigo-600 text-white rounded-md p-2 hover:bg-indigo-800'>Iniciar Sesion</button> 
                        </Link>                                       
                    </div>
                    <div className='flex justify-between space-x-4 m-3'>
                        <div >
                            <span>¿No tienes cuenta?</span>
                        </div>
                        <div className='text-indigo-500'>
                            <Link to='/registro'>
                                Registrate
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span>----o----</span>
                    </div>
                    <div className='m-3'>
                        <button className='bg-gray-200 rounded-md p-2 hover:bg-gray-500 flex'> <img className='w-10' src={logoGoogle} alt="logo-Google" /> Continuar con Google</button>
                    </div>  
                </div>
                                    
            </form>
        </div>
    )
}

export default Login;
