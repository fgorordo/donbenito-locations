import React, { useEffect, useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa';
import { getPropsByName } from '../../../helpers/getPropsByName';
import NotFound from '../../NotFound';
import OwnerPlate from '../../OwnerPlate';

const SearchBar = () => {
  const [searchInputText, setSearchInputText] = useState('')

  const onInputChange = (event) => {
    setSearchInputText(event.target.value)  
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  let props = getPropsByName(searchInputText);

  useEffect(() => {
    props = getPropsByName(searchInputText)

  }, [searchInputText])
  
  
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
            <FaSearchLocation className='text-xl text-gray-400' />
          </button>
        </div>
      </form>
      <div className='px-4'>
        <p className='text-center text-xl mb-4'>Selecciona una unidad funcional para activar el gps.</p>
        <ul className='m-0 py-0'>
          {
            props.length === 0 ? (
            <NotFound searchText={searchInputText} />
            )
            :
            (
              props.map(prop => {
                return (
                  <li className='odd:bg-[#50903C] even:bg-[#8FB435] mb-[2px] rounded animate-appearing' key={prop.ufNumber}>
                    <OwnerPlate owner={prop.ufOwner} coOwner={prop.ufCoOwner} locationLink={prop.locationLink} ufNumber={prop.ufNumber} />
                  </li>
                )
              })
            )
          }
        </ul>
      </div>
    </>
  )
}

export default SearchBar