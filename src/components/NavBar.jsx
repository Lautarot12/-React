import '../styles/navbar.css'
import CartWidget from './CartWidget'
const Navbar = () => {

    return (
        <nav className="navcontainer">
            <a className='a-nav' href=''>
                <img className='logo' src='../logopollosolonuevo.png' />
            </a>
            <a className="a-nav" href="#">Productos frescos</a>
            <a className="a-nav" href="#">Productos congelados</a>
            <a className="a-nav" href="#">Precocidos</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar