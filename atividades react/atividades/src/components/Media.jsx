
  import React, { useState } from 'react'

function Media() {
  const [inputNota1, setNota1] = useState('')
  const [inputNota2, setNota2] = useState('')

  function calcular(){

    let n1 = Number(inputNota1)
    let n2 = Number(inputNota2)
    let resultado = n1 + n2 / 2 
    if(resultado >= 7){
      alert("Parabéns, você passou")
    }
    else if(resultado <= 7 && resultado >= 4){
      alert("Cuidado, você está de recuperação")
    }else{
      alert("Reprovado!!!")
    }
  }
  
  return (
    <div className='media'>
        <h1>Média</h1>
      <label htmlFor=""id='nota1'>Digite a nota 1:</label>
      <div>
        <input type="number" value={inputNota1} id='nota1'
        onChange={(event) => setNota1(event.target.value)} />
       </div>
       <div>
          <label htmlFor="" id='nota2'>Digite a nota 2:</label>
        </div>
        <div>
          <input type="number" value={inputNota2} id='nota2'
          onChange={(event) => setNota2(event.target.value)}/>
       </div>
        <div>
      <button onClick={calcular}>Calcular</button>
      </div>
    </div>
  )
}

export default Media