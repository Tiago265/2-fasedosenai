import './produtos.css'

function Produto(props) {
  return (
    <div className='container-produto'>
           <h2>{props.modelo}</h2>
           <img src={props.img} alt="" />
           <img src={props.img2} alt="" />
        <p>R${props.preco.toFixed(2).replace(".",",")}</p>
        {/* <p>{props.id}</p> */}
    </div>
  )
}

export default Produto