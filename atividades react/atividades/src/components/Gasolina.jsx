import React, { useState } from 'react'

function Gasolina() {
    const[inputGasolina, setInputGasolina] = useState('')
    const[totalGasolina, setTotaltGasolina] = useState(0)
    const[inputAlcool, setInputAlcool] = useState('')
    const[totalAlcool, setTotalAlcool] = useState(0)
    const[inputDiesel, setInputDiesel] = useState('')
    const[totalDiesel, setTotalDiesel] = useState(0)

    function venderGasolina(){

        let qtd = Number(inputGasolina)
        setTotaltGasolina(totalGasolina + qtd)

    }

    function venderAlcool(){
        
        let qtd = Number(inputAlcool)
        setTotalAlcool(totalAlcool + qtd)

    }
  return (
    <>
        <div className="gasolina">
            <h1>Gasolina</h1>
            <div>
                <label htmlFor="">Gasolina</label>
            </div>
            <div>
                <input type="number" value={inputGasolina}
            onChange={(event) => setInputGasolina(event.target.value)}/>
            <button onClick={venderGasolina}> + </button> {totalGasolina}
            </div>
        </div>
        <div>
                <label htmlFor="">Álcool</label>
            </div>
            <div>
                <input type="number" value={totalAlcool}
            onChange={(event) => setInputAlcool(event.target.value)}/>
            <button onClick={venderAlcool}> + </button> {totalAlcool}
            </div>
            <div>
                <label htmlFor="">Diesel</label>
            </div>
            <div>
                <input type="number" value={totalGasolina}
            onChange={(event) => setInputGasolina(event.target.value)}/>
            </div>
        <div>

            <button onClick={venderGasolina}>Ver</button>
        </div>
    </>
  )
}

export default Gasolina