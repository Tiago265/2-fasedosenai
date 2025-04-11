import React, { useState } from 'react'

function Pneu() {
    const[inputPressaoDesejada, setDesejada] = useState('')
    const[inputPressaoLidaBomba, setPressaoLidaBomba] = useState('')
    const[inputResultado, setResultado] = useState('')

    function validar(){

      setResultado(Number(inputPressaoDesejada) - Number(inputPressaoLidaBomba))
      limpar()  

    }

    function limpar(){
        setPressaoLidaBomba('')
        setDesejada('')
    }
  return (
    <>
    <div className='pneu'>
        <h1>Pneu</h1>
    <div>
        <label htmlFor="">Digite a pressão desejada pelo motorista:</label>
    </div>
    <div>
        <input type="number" value={inputPressaoDesejada}
        onChange={(event) => setDesejada(event.target.value)}/>
    </div>  
    <div>
        <label htmlFor="">Digite a pressão lida pela bomba</label>
    </div>
    <div>
        <input type="number" value={inputPressaoLidaBomba}
        onChange={(event) => setPressaoLidaBomba(event.target.value)}/>
    </div>
    <div>
        <button onClick={validar}>Validar</button>
        <button onClick={limpar}>🔱</button>
    </div>
    {inputResultado}
        </div>
    </>
  )
}

export default Pneu