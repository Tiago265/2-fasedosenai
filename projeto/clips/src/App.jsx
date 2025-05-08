
import { useState } from 'react'
import './App.css'
import Diagnostico from './components/Diagnostico'

function App() {
const[sintoma,setSintomas] = useState('')

function diagnosticar(){

  // let nome = {
  //   id:Date.now(),
  //   movimentacao:inputNome,
  //   preco:inputValor,
  //   tipo:'(Crédito)'
  // }
   if(sintoma == "gripe"){

   }
}
  return (
    <div className='container-app'>
        <h1>Site do sus</h1>

    <label htmlFor="">Digite o sintoma que você sente: </label>
    <input type="text" 
    value={sintoma}
    onChange={(event) => setSintomas(event.target.value)} placeholder='Diagnóstico'/>
    <button onClick={diagnosticar}>Diagnosticar</button>

    <Diagnostico />
    </div>
  )
}

export default App
