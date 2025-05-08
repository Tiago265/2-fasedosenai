import './Historico.css'
function Historico(props) {
  return (
    <div className='container-historico'>
     <h4> {props.movimentacao} </h4> - 
     <p> {props.preco} </p>
     <label htmlFor=""> {props.tipo} </label>
    </div>
  )
}

export default Historico