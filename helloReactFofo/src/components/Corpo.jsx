import './Corpo.css'

function Corpo(){
    function alertarUsuario(){
        alert('cuidadoooooo!')
    }
    function descricao(){
        alert('O MySQL é o banco de dados de código aberto mais conhecido no mundo. De acordo com o DB-Engines, o MySQL é o segundo banco de dados mais popular, ficando atrás do Oracle Database. O MySQL alimenta muitas das aplicações mais acessadas, como Facebook, Twitter, Netflix, Uber, Airbnb, Shopify e Booking.com. Como o MySQL é de código aberto, ele inclui vários recursos desenvolvidos em estreita cooperação com os usuários há mais de 25 anos. Portanto, é muito provável que sua aplicação ou linguagem de programação favorita seja compatível com o MySQL Database.')
    }
    return (
        <div className="container-corpo">
            <h1>Desbravando o REACT</h1>
            <p> Vamos começar a nossa aventura</p>
            <p>Módulo do <a href="https://pt-br.legacy.reactjs.org/docs/react-component.html">React</a></p>
         <button onClick={alertarUsuario}>Alerta</button><br /><br />
        <img onClick={descricao} className='imagem' src="./mySQL.jpg" alt="mySQL Workbench" />
        </div>
    )
}

export default Corpo;
