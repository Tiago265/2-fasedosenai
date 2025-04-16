import React, { useState } from 'react'

function FilmesdaVovo() {
    const[inputAntigo, setInputAntigo] = useState('')
    const[inputNovo, setInputNovo] = useState('')
    const[resultado, setResultado] = useState(0)

    function calcularAumento(){
        let antigo = Number(inputAntigo)
        let novo = Number(inputNovo)
        let diferenca = novo - antigo

        let percentual = (diferenca/antigo) * 100

        setResultado(percentual)
    }

  return (
    <>
    <div className='FilmesdaVovo'>
        <label htmlFor="">Valor antigo: </label>
        <div>
        <input type="text" value={inputAntigo}
        onChange={(event) => setInputAntigo(event.target.value)}/>
        </div>
        <div>
        <label htmlFor="">Valor Novo: </label>
        </div>
        <div>
        <input type="text" value={inputNovo}
        onChange={(event) => setInputNovo(event.target.value)}/>
        </div>
    </div>
    <div>
        <button onClick={calcularAumento}>Calcular aumento</button>
    </div>

    {resultado > 0 && 
    <div>
        Aumento: {resultado.toFixed(2)}%
    </div>
    }
    </>
  )
}

export default FilmesdaVovo