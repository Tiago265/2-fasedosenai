import { useState } from 'react'

import './App.css'
import Evento from './components/Evento'


function App() {

const[inputUsername, setInputUsername] = useState('')

const[inputSenha, setInputSenha] = useState('')

const[erro, setErro] = useState(false)


  function efetuarLogin(){



    if(inputUsername === 'Gill Bates' && inputSenha === '1235'){

      setErro(false)

  }else{

    // alert("Erro #403")
    setErro(true)

  }
    
  }

  return (

    <div className='container-app'>

      <h1>Inputs Controlados</h1>

    {positivo &&
    <span className='msg-acesso'>Acesso Garantido</span>
    }

      <label htmlFor="">Username</label>

      <input type="text" value={inputUsername}
      onChange={(event) => setInputUsername(event.target.value)} />

      <label htmlFor="">Senha</label>

      <input type="password" value={inputSenha}
      onChange={(event) => setInputSenha(event.target.value)} />


    {erro && 
      <span className='msg-erro'>Credenciais Inválidas.</span>
    }
    <button onClick={efetuarLogin}>Login</button>
   
    <Evento />

    </div>


  )

}

export default App
