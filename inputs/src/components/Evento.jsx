import React, { useState } from 'react'

function Evento() {

const[inputTest, setInputTest] = useState ('')

    function testar(event){

        console.log(event);

    }

    function mudouInput(){

        console.log(event)
        setInputTest(event.target.value)

    }

  return (

    <div className='container-evento'>
    <h2>
        Evento
     </h2>

        <button onClick={(event) => testar(event)}>testar</button>
    <input type="text"
        value={inputTest}
        onChange={(event) => mudouInput(event)}

        />
    </div>
  )
}

export default Evento