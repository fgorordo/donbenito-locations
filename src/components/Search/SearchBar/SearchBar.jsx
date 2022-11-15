import React, { useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa';
import { getPropsByName } from '../../../helpers/getPropsByName';
import {HiHome} from 'react-icons/hi';

const SearchBar = () => {
  const [searchInputText, setSearchInputText] = useState('')

  const onInputChange = (event) => {
    setSearchInputText(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchInputText)
  }

  const props  = getPropsByName(searchInputText);
  console.log(props)
  return (
  <>
    <form className='p-5 flex flex-col text-center' onSubmit={onFormSubmit}>
      <label htmlFor="prop" className='font-bold text-lg mb-2'>
        ¿Necesitas un guia?
      </label>
      <div className='relative'>
      <input 
        type="text" 
        placeholder='Ingrese un nombre o número de UF.'
        name='prop'
        className='w-full h-[40px] border-2 focus:outline-none border-black rounded-lg p-4 placeholder:italic pl-10'
        value={searchInputText}
        onChange={onInputChange}
      />
      <button className='absolute left-0 top-[50%] translate-y-[-50%] p-4'>
       <FaSearchLocation  className='text-xl text-gray-400'/>
      </button>
      </div>
    </form>
    <div className='px-4'>
      <p className='text-center text-xl mb-4'>Selecciona una unidad funcional para activar el gps.</p>
      <ul className='m-0 py-0'>
        {
                  props.map(prop => {
                    return (
                      <li className='odd:bg-[#50903C] even:bg-[#8FB435] mb-[2px] rounded'>
                        <div className='p-4 flex items-center gap-16 rounded'>
                        <div>
                          <HiHome className='text-6xl text-white'/>
                        </div>
                        <div>
                          <p className='font-bold text-white'>Unidad Funcional N° {prop.ufNumber}</p>
                          <p className='text-white'>{prop.ufProp0}</p>
                          <p className='text-white'>{prop.ufProp1}</p>
                        </div>
                      </div>
                      </li>
                    )
                  })
        }
       </ul>
    </div>
  </>
  )
}

export default SearchBar