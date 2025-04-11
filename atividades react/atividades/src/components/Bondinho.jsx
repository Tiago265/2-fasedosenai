import React, { useState } from 'react'

function Bondinho() {
    const [inputAlunos, setAlunos] = useState('')
    const [inputMonitores, setMonitores] = useState('')
    
    function mostrar(){

        let A = Number(inputAlunos)
        let B = Number(inputMonitores)
        let resultado = A + B
        if(resultado <= 50){

            alert("Sim")

        }else{

            alert("Não")

        }

    }
  return (
    <div className='bondinho'>
        <div>
            <h1>Bondinho</h1>
        </div>
        <label htmlFor="">Digite o número de alunos</label>
        <div>
            <input type="number" value={inputAlunos}
            onChange={(event) => setAlunos(event.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Digite o número de Monitores</label>
            <div>
                <input type="number" value={inputMonitores}
                onChange={(event) => setMonitores(event.target.value)}/>
                <div>
                    <button onClick={mostrar}>Calcular</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bondinho