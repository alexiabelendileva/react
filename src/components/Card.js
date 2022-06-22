import './Card.css'

function Card({product, price,description, image}){
    return(
        <div className="card">
            <img className="img" src={image}/>
            <h4>{product}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}






export default Card;
