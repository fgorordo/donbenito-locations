import React from 'react'
import mainLogo from '../../assets/don-benito-logo.svg'

const Header = () => {
  return (
    <header className="text-center flex justify-center flex-col gap-4 pt-8 container">
      <img src={mainLogo} alt="Don Benito Logo" className="max-w-[340px] m-auto"/>
      <h1 className="text-3xl font-bold">¡Bienvenido!</h1>
      {/* <p className="text-xl"><b>¿Necesitas un guia?</b><br />Selecciona donde quieres ir y te ayudamos.</p> */}
    </header>
  )
}

export default Header