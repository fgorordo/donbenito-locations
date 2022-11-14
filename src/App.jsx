import mainLogo from './assets/don-benito-logo.svg';
import './main.css';
import { AiOutlineHome } from 'react-icons/ai'
function App() {

  return (
    <>
    <header className="text-center flex justify-center flex-col gap-4 pt-8 pb-8 container">
      <img src={mainLogo} alt="Don Benito Logo" className="max-w-[340px] m-auto"/>
      <h1 className="text-3xl font-bold">¡Bienvenido!</h1>
      <p className="text-xl"><b>¿Necesitas un guia?</b><br />Selecciona donde quieres ir y te ayudamos.</p>
    </header>
    <main className="grid gap-2 grid-cols-2 px-8">
      <div className="bg-green-600 hover:bg-green-400 transition-all w-[150px] h-[150px] rounded-lg flex flex-col justify-center items-center gap-2 drop-shadow-xl">
        <AiOutlineHome className='text-white text-5xl'/>        
        <p className="text-white text-xl font-bold text-center">UF 01</p>
        <p className="text-white text-l font-semibold text-center">Pepito / Pepita </p>
      </div>

      <div className="bg-green-600 w-[150px] h-[150px] rounded-lg flex flex-col justify-center items-center gap-2">
        <AiOutlineHome className='text-white text-5xl'/>        
        <p className="text-white text-xl font-bold text-center">UF 01</p>
        <p className="text-white text-l font-semibold text-center">Pepito / Pepita </p>
      </div>

      <div className="bg-green-600 w-[150px] h-[150px] rounded-lg flex flex-col justify-center items-center gap-2">
        <AiOutlineHome className='text-white text-5xl'/>        
        <p className="text-white text-xl font-bold text-center">UF 01</p>
        <p className="text-white text-l font-semibold text-center">Pepito / Pepita </p>
      </div>

      <div className="bg-green-600 w-[150px] h-[150px] rounded-lg flex flex-col justify-center items-center gap-2">
        <AiOutlineHome className='text-white text-5xl'/>        
        <p className="text-white text-xl font-bold text-center">UF 01</p>
        <p className="text-white text-l font-semibold text-center">Pepito / Pepita </p>
      </div>
    </main>
    </>
  )
}

export default App
