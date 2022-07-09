import './NavBar.css';
import logo from './logo.png';
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom'



function NavBar(){
    return(
        <header className="navbar">
            <Link to="/home"><img className="imagen" src={logo}/></Link>
            <p className="p"><Link className='link' activeClassName='active' to="/home">Home</Link></p>
            <p className="p"><Link className='link'activeclassname='active' to="/contactanos">Contáctanos</Link></p>
            <p className="p"><Link className='link'activeclassname='active' to="/sale">¡SALE!</Link></p>
            <p className="p"><Link className='link'activeclassname='active' to="/tienda">Tienda</Link></p>
            <form>
                <label>
                    <input className="input" type="text" name="name" placeholder="Ingresa un producto" />
                </label>
                <input className="button" type="submit" value="Search" />
            </form>
            <Cart/>
        </header>
    );
}

export default NavBar;