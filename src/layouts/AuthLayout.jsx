import React from 'react'
import logoCarro from '../media/logoCarro.png';
import iconHome from '../media/iconHome.png';
import { Link } from 'react-router-dom';

const AuthLayout = ({children}) => {
    return (
        <div className=''>
            <div className='m-2'>
                <Link to='/'>
                    <img className='flex justify-start' src={iconHome} alt="homeImagen" />
                </Link>
                   
            </div>
             
            <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4'>
           
            <img className='w-20' src={logoCarro} alt="logoConcesionario" />
            <main className='w-full'>{children}</main>         
            </div>      
        </div>
        )
        
}

export default AuthLayout
