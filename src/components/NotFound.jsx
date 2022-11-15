import React from 'react'
import { ImSad } from 'react-icons/im'

const NotFound = ({searchText}) => {
  return (
    <div className='text-center text-2xl text-slate-400'>
        <ImSad  className='text-4xl w-full mb-2 mt-8'/>
        <p>No se encontraron resultados para <b className='text-slate-500'>{searchText}</b>.<br />Por favor, verifique la información.</p>
    </div>
  )
}

export default NotFound