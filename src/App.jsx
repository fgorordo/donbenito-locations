import './main.css';
import { AiOutlineHome } from 'react-icons/ai'
import propsData from './data/props.json'
import Header from './components/Header/Header';
import Search from './components/Search/Search';
function App() {

  return (
    <>
    <Header />
    <Search />
    </>
  )
}

export default App
