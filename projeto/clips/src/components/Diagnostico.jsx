import React, { useState } from 'react'

function Diagnostico(props) {

  return (
    <div className='container-historico'>
    <h4> {props.sintoma} </h4> - 
    <p> {props.niveldoSintoma} </p>
    <label htmlFor=""> {props.niveldoSintoma} </label>
   </div>
  )
}

export default Diagnostico
