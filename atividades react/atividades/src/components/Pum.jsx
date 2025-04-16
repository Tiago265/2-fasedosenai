import  { useState } from 'react'

function Pum() {
    const[pum, setPum] = useState('')
    const[resultado, setResultado] = useState('')

    function contar(){
      let contagemPUMs = 0
      let limitePUMs = Number(pum)
      let cont = 1
      let acumulador = "" 

        while(contagemPUMs < limitePUMs){
          if(cont % 4 != 0){
          console.log(cont)
        acumulador += cont + ' '
         }else{
          console.log("PUM")
          contagemPUMs++
          acumulador += "PUM\n"
          }
          cont++
        }
           setResultado(acumulador)
        }
        return (
          <>
    <div className='Pum'>

          <h1>PUM</h1>
            <input type="number" value={pum}
            onChange={(event) => setPum(event.target.value)}/>
        </div>
        <div>
            <button onClick={contar}>Contar</button>
        </div>
          <div>
            {resultado}
          </div>
    </>
  )
  
}


export default Pum