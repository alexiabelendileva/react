import './Card.css'
import Counter from '../Contador/Counter';

function Card({product, price,description, image,stock}){
    return(
        <div className="animate__animated animate__pulse card">
            <img className="img" src={image}/>
            <h4>{product}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            <Counter stock={stock}/>
            <button className="boton">Agregar al carrito</button>
          
        </div>
    )
}






export default Card;
