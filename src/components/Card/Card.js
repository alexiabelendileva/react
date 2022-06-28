import './Card.css'
import Counter from '../Contador/Counter';

function Card({product, price,description, image,stock}){
    return(
        <div className="card">
            <img className="img" src={image}/>
            <h4>{product}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            <Counter />
            <button className="boton">Agregar al carrito</button>
          
        </div>
    )
}






export default Card;
