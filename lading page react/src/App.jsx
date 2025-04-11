import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [senha , setSenha] = useState('')
  const bancodeDados = []
    function login(){

    }
  return (
    <>
      <div className='container-app'>
        <h1>Sistema de cadastro </h1>
        <div>
          <label htmlFor="">Digite seu nome de usuário:</label>
        </div>
          <div>
            <input type="text" value={usuario}
            onChange={(event) => setUsuario(event.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Digite sua senha:</label>
            <div>
              <input type="password" value={senha}
              onChange={(event) => setSenha(event.target.value)}/>
            </div>
            <button onClick={login}>Logar</button>
          </div>
          <div>
            <span>Não tem uma conta?</span><a href="Cadastro.jsx">Cadastre-se aqui</a>
          </div>
        </div>
    </>
  )
}

export default App
