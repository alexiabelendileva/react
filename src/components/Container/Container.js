import './Container.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState,useEffect } from 'react'
function Container(){
    const[detail, setDetail] = useState([])

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
            .then((data) => setDetail(data.filter(d=>d.id ===1)))
        },2000)    
    }, [])  
    return(
        <div>
            <div className='detail'>
                {detail && detail.map(d => <ItemDetail imagen={d.img} producto={d.nombre}  precio={d.price} stockd={d.stock} color={d.color} descripcion={d.description}/>)}
            </div>
        </div>
        )
}
export default Container;