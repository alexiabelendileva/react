import './NavBar.css';
import logo from './logo.png';

function NavBar(){
    return(
        <header className="navbar">
            <img className="imagen" src={logo}/>
            <p><a src="#">Home</a></p>
            <p><a src="#">Tienda</a></p>
            <p><a src="#">Contáctanos</a></p>
            <p><a src="#">Sobre nosotros</a></p>
            <p><a src="#">¡SALE!</a></p>
            <form>
                <label>
                    <input className="input" type="text" name="name" placeholder="Ingresa un producto" />
                </label>
                <input className="button" type="submit" value="Search" />
            </form>
        </header>
    );
}

export default NavBar;