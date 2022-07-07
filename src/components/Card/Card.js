import './Card.css'
import Counter from '../Contador/Counter';
import {Link} from 'react-router-dom'
import { React } from 'react';



function carritoAnuncio() {
    alert("Agregado");
}


    function Card({product, price,description, image,stock,id}){
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
                    <Link to={`/itemdetail/${id}`}><button className='boton'>Ver más</button></Link>
                </div>
            </div> 
        )
    }


export default Card;
