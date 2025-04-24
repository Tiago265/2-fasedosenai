import './navbar.css'

function Navbar() {
  return (
    <div className='container-navbar'>
        <div className="logo">
            <img src="src/imagens/farmarcia.webp" alt="" />
        </div>
        <label htmlFor="">Camisetas</label>
        <label htmlFor="">Cartões</label>
        <label htmlFor="">Local</label>
        <label htmlFor="">Sobre</label>
    </div>

  )
}

export default Navbar