import React, {useEffect, useState} from 'react';

const Vehiculos = () => {
    
    const [edad, setEdad] = useState(0);
    const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);
    const[mostrarCamposAdicionales,setMostrarCamposAdicionales] = useState(false);

    useEffect(()=>{
        if(edad >= 18){
            setEsMenorDeEdad(false);
        } else{
            setEsMenorDeEdad(true);
        }
    },[edad])

    return (
        <form className='flex flex-col'>
            <h2>Formulario de creacion de vehiculos</h2>
            <label htmlFor="edad">
                Por favor ingrese su edad
                <input value={edad} 
                onChange={(e) => {
                    setEdad(e.target.value)}}
                    className='border border-gray-600' 
                    name='edad'
                    type="number" />
            </label>
            {esMenorDeEdad ? (
                <span className='text-3xl text-red-500'>
                !Usted es menor de edad, no puede hacer pagos¡
            </span>
            ) : (
                <span className='text-3xl text-green-500'>
                !Usted es mayor de edad, si puede hacer pagos¡
            </span>
            )} 
            <button type='button' onClick={() => { setMostrarCamposAdicionales(!mostrarCamposAdicionales)}} className='bg-indigo-500 text-white'>Mostrar campos adicionales</button>           
            {mostrarCamposAdicionales && (
                <div>
                    <input className='border bg-gray-400 m-2 p-3' placeholder='Dato Nuevo' type="text" />
                    <input className='border bg-gray-400 m-2 p-3' placeholder='Dato Nuevo' type="text" />
                    <input className='border bg-gray-400 m-2 p-3' placeholder='Dato Nuevo' type="text" />
                    <input className='border bg-gray-400 m-2 p-3' placeholder='Dato Nuevo' type="text" />
                    <input className='border bg-gray-400 m-2 p-3' placeholder='Dato Nuevo' type="text" />
                </div>
            )}
        </form>
    )
}

/*if(esMenorDeEdad){
    return(
        <span className='text-3xl text-red-500'>
                !Usted es menor de edad, no puede hacer pagos¡
            </span>
    )
    
} else{
    return(
        <span className='text-3xl text-green-500'>
                !Usted es mayor de edad, si puede hacer pagos¡
            </span>
    )
}*/

export default Vehiculos
