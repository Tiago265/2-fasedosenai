import React, { useState } from 'react'

function Hohoho() {
    const[hohoho, setHohoho] = useState('')
    const[resultado, setResultado] = useState('')

    function contar(){
        let n = Number(hohoho)
        let texto = ''
        for(let i = 0;i < n; i++){
            texto += ' ho'
        }
        setResultado(texto)
    }
  return (
    <div className='Hohoho'>
        <h1>Hohoho</h1>
        <div>
            <input type="number" value={hohoho}
            onChange={(event) => setHohoho(event.target.value)}/>
            <div>
                <button onClick={contar}>Contar</button>
            </div>
            <div>
                {resultado}
            </div>
        </div>
    </div>
  )
}

export default Hohoho