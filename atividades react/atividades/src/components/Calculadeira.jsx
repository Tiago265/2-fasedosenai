import React, { useState } from 'react'

function Calculadeira() {
    const[inputN1, setN1] = useState('')
    const[inputN2, setN2] = useState('')
    const[Resultado, setResultado] = useState('')

    function tratarN2(event){
      setN2(event.target.value)
      setResultado('')
    }
    function soma(){
      setResultado(Number(inputN1) + Number(inputN2))
      limpar()
    }
    function subtracao(){
      setResultado(Number(inputN1) - Number(inputN2))
      limpar()
    }
    function divisao(){
      setResultado(Number(inputN1) / Number(inputN2))   
      limpar()
    }
    function multiplicacao(){
      setResultado(Number(inputN1) * Number(inputN2))
      limpar()
    }
    function limpar(){
      setN1('')
      setN2('')
    }
  return (
    
    <>
        <div className='calculadeira'>
      <h1>Calculadeira</h1>
          <div>
            <div>
            <label htmlFor="">Digite um número:</label>
            </div>
            <input type="number"  step={0.1} value={inputN1}
            onChange={(event) => setN1(event.target.value)}/>
        </div>
       
        <div>
          <label htmlFor="">Digite mais um número:</label>
        </div>
        <div>
            <input type="number" value={inputN2}
            onChange={tratarN2}/>
        </div>
      
        <div>
            <button onClick={soma}>➕</button>
            <button onClick={subtracao}>➖</button>
            <button onClick={multiplicacao}>✖️</button>
            <button onClick={divisao}>➗</button>
            <button onClick={limpar}>🔱</button>

        </div>
        <div>
          {Resultado}
        </div>
            </div>
    </>
  )
}

export default Calculadeira