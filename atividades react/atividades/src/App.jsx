
import ('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
import { useState } from 'react'
import './App.css'
import Bondinho from './components/Bondinho'
import Calculadeira from './components/Calculadeira'
import Media from './components/Media'
import OracaoDevWeb from './components/OracaoDevWeb'
import Pneu from './components/Pneu'
import OracaoFrontend from './components/OracaoFrontend'
import OracaoBackend from './components/OracaoBackend'

function App() {

  const[painel, setPainel] = useState('')
  

  return (
    <>
      <div className="container-atividades">
      <Media />
      <Bondinho />
      <Calculadeira />
      <Pneu />
       <div className="oracao">
      <button onClick={() => setPainel(<OracaoDevWeb />)}>Oração dev web</button>
      <button onClick={() => setPainel(<OracaoBackend />)}>Oração Backend</button>
      <button onClick={() => setPainel(<OracaoFrontend />)}>Oração Frontend</button>
      {painel}
       </div>
     </div>
    </>
  )
}

export default App
