import { useState } from 'react'
import './body.css'
import Produto from './Produto'

function Body() {
    const[produtos, setProdutos] = useState([
        {id:Date.now(), modelo:"Camisetas", preco: 120, img: "/imagens/farmarcia-camisetas.webp"},
        {id:Date.now() + 1, modelo:"Camisetas pretas", preco: 120, img2: "/imagens/farmarcia-camiseta.webp"},
        {id:Date.now() + 2, modelo:"Cartões", preco: 10},
    ])
  return (
    <>
    <div className='container-body'>
        <h1>
            Sobre nós
        </h1>
        <h2>
            Nós somos uma farmácia que devemos ajudar todas as familías do Brasil. Com Mais de 50 Anos <br /> 
            em Florianópolis, Brasilía, São Paulo de Mato Grosso.
            
        </h2>
            <div className="produtos">
               
        <h1>Nossos produtos</h1>
        <div>
            <div className="cards">
        {produtos.map((p) => (
          <Produto key={p.id} modelo={p.modelo} preco={p.preco} img={p.img}/>
        ))}
                </div> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Body