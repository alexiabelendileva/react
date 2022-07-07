import './Body.css';
import Card from '../Card/Card';
import { useEffect, useState, useParams } from 'react';


export const Body = ({greeting}) => {

    const[info, setInfo] = useState([])
    const {idcategoria} = useParams();
    console.log(idcategoria)
    useEffect(()=>{
        setTimeout(
            () => {
            fetch('../datos.json',{
                headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
                }
            })    
            .then((resp) => resp.json())
            .then((data) => setInfo(idcategoria ? data.filter((item) => item.categoria === idcategoria) : data))
        },1000)   
    }, [idcategoria])
 ;    
    return(
        <div className="cuerpo">
            <div>
                <h1>Productos destacados</h1>
                <h2>¡Elegí entre los productos de mejor calidad!</h2>
            </div>            
            <div className='catalogo'>
                {info && info.map(i => <Card image={i.img} product={i.nombre}  price={i.price} stock={i.stock}id={i.id} categoria={i.categoria}/> )}
            </div>
        </div>
    );
}

export default Body;