import './Container.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Container(){
    const[detail, setDetail] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        setTimeout( () => {


            fetch('../datos.json',{
                headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
                }
            })    
            .then((resp) => resp.json())
            .then((data) => setDetail(data.filter(d=>d.id===id)))

        },2000)    
    }, []);  
    return(
        <div>
            <div className='detail'>
                {detail && detail.map(d => <ItemDetail imagen={d.img} producto={d.nombre}  precio={d.price} stockd={d.stock} color={d.color} descripcion={d.description} id={d.id}/>)}
            </div>
        </div>
        )
}
export default Container;