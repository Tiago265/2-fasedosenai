// import ('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
import {  useState } from 'react'
import './App.css'
import Historico from './components/Historico'

function App() {
const[inputValor, setInputValor] = useState('')
const[saldo, setSaldo] = useState(0)
const[inputNome, setInputNome] = useState('')
const[movimentacao, setMovimentacao] = useState([])
// const[msgDebito, setMsgDebito] = useState('')
// const[msgCredito, setmsgCredito] = useState('')


function credito(){
  setSaldo(Number(inputValor) + Number(saldo))
  setInputValor('')

  let nome = {
    id:Date.now(),
    movimentacao:inputNome,
    preco:inputValor,
    tipo:'(Crédito)'
  }
  setMovimentacao([nome, ...movimentacao])
  setInputNome('')
}

function debito(){
  setSaldo(Number(saldo) - Number(inputValor))
  setInputValor('') 
  let nome = {
    id:Date.now(),
    movimentacao:inputNome,
    preco:inputValor,
    tipo:'(Débito)'
  }
  setMovimentacao([nome, ...movimentacao])
  setInputNome('')
  
}
 
  return (
    <div className='container-app'>
    <h1>
      iMesada
    </h1>
    <h2>
      Controlinho Financeiro
    </h2>
    <h3>
      💰Saldo: R${saldo.toFixed(2).replace(".",",")}
    </h3>
    <input type="text" value={inputNome}
    onChange={(event) => setInputNome(event.target.value)} placeholder='Nome movimentação'/>
    <input type="number" 
    value={inputValor}
    onChange={(event) => setInputValor(event.target.value)} placeholder='Valor'/>
    <div className="buttons">
    <button className='verde' onClick={credito}>Crédito</button>
    <button className='vermelho' onClick={debito}>Débito</button>
    <h1>📋 Kowalski, relatório🐧 </h1>
    
    </div>
    {movimentacao.map((p) => (
      <Historico key={p.id} movimentacao={p.movimentacao} preco={p.preco} tipo={p.tipo} />
    ))}
    
    </div>
  )
}

export default App
