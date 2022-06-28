import './NavBar.css';
import logo from './logo.png';
import Cart from '../Cart/Cart';


function NavBar(){
    return(
        <header className="navbar">
            <img className="imagen" src={logo}/>
            <p className="p"><a src="#">Home</a></p>
            <p className="p"><a src="#">Tienda</a></p>
            <p className="p"><a src="#">Contáctanos</a></p>
            <p className="p"><a src="#">Sobre nosotros</a></p>
            <p className="p"><a src="#">¡SALE!</a></p>
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