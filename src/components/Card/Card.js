import './Card.css'
import Counter from '../Contador/Counter';
import {Link} from 'react-router-dom'
import { React } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




function carritoAnuncio() {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: '¡Producto agregado!',
        icon:'success',
        timer:2000
    })
;
}


    function Card({product, price,description, image,stock,id,categoria, color}){
        return(
            <div> 
                <div className="animate__animated animate__pulse card">
                    <img className="img" src={image}/>
                    <h4>{product}</h4>
                    <p>{description}</p>
                    <p>${price}</p>
                    <p>Stock: {stock}</p>
                    <Counter stock={stock}/>
                    <button className='boton' onClick={carritoAnuncio}>Agregar al carrito</button>
                    <Link to={`/${categoria}/${id}`} state={{imagen:image, producto:product,precio:price, descripcion: description,stockd:stock, color:color}}><button className='boton'>Ver más</button></Link>
                </div>
            </div> 
        )
    }


export default Card;
