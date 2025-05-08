
import { useState } from 'react'
import './App.css'
import Diagnostico from './components/Diagnostico'

function App() {
  const[inputNiveldoSintoma, setInputNivelSintoma] = useState('')
  const[inputSintoma,setInputSintoma] = useState()
  const[movimentacao, setMovimentacao] = useState([])

function diagnosticar(){

  if(setInputNivelSintoma >= 6){
    let nome = {
      id:Date.now(),
      movimentacao:inputSintoma,
      niveldoSintoma:'Grave'
    }
    setInputSintoma(nome, ...inputSintoma)
  }
  else if(setInputNivelSintoma <= 6){
    let nome = {
      id:Date.now(),
      movimentacao:inputSintoma,
      niveldoSintoma:'Leve'
    }
    setInputSintoma([nome, ...inputSintoma])
  }
  setInputSintoma('')
  setInputNivelSintoma('')
}
  return (
    <div className='container-app'>
        <h1>Site do sus</h1>

    <label htmlFor="">Digite o sintoma que você sente: </label>
    <input type="text" 
    value={inputSintoma}
    onChange={(event) => setInputSintoma(event.target.value)} 
    placeholder='Diagnóstico'/>
    <input type="number" 
    value={inputNiveldoSintoma}
    onChange={(event) => setInputNivelSintoma(event.target.value)}
    placeholder='Nivel'/>
    <button onClick={diagnosticar}>Diagnosticar</button>

    {movimentacao.map((p) => (
       <Diagnostico key={p.id} movimentacao={p.movimentacao}  niveldoSintoma={p.niveldoSintoma} />
    ))}
    </div>
  )
}

export default App
