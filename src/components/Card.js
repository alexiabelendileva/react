import './Card.css'
import Counter from './Counter';

function Card({product, price,description, image}){
    return(
        <div className="card">
            <img className="img" src={image}/>
            <h4>{product}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <button className="boton">Agregar al carrito</button>
            <Counter/>
        </div>
    )
}






export default Card;
