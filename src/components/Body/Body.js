import './Body.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';


function Body(){
    const[info, setInfo] = useState([])

    useEffect(()=>{
        setTimeout(
            () => {
            fetch('datos.json',{
                headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
                }
            })    
            .then((resp) => resp.json())
            .then((data) => setInfo(data))
        },2000)    
    }, [])
 ;    
    return(
        <div className="cuerpo">
            <div>
                <h1>Productos destacados</h1>
                <h2>¡Elegí entre los productos de mejor calidad!</h2>
            </div>            
            <div className='catalogo'>
                {info && info.map(i => <Card image={i.img} product={i.nombre} description={i.description} price={i.price} stock={i.stock}/>)}
            </div>
        </div>
    );
}

export default Body;