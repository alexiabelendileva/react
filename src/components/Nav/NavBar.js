import './NavBar.css';
import logo from './logo.png';
import Cart from '../Cart/Cart';
import {NavLink} from 'react-router-dom'


function NavBar(){
    return(
        <header className="navbar">
            <img className="imagen" src={logo}/>
            <p className="p"><NavLink activeClassName='active' to="/home">Home</NavLink></p>
            <p className="p"><NavLink activeclassname='active' to="/contactanos">Contáctanos</NavLink></p>
            <p className="p"><NavLink activeclassname='active' to="/sale">¡SALE!</NavLink></p>
            <p className="p"><NavLink activeclassname='active' to="/tienda">Tienda</NavLink></p>
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