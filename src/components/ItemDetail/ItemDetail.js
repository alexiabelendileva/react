import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Counter from '../Contador/Counter';
import './ItemDetail.css';

function ItemDetail(){
    let location = useLocation();
    let {producto, precio,descripcion, imagen,stockd,color} = location.state;
    return(
        <div className='cont2column'>
            <div className='column-left'><img className="imagenprinc" src={imagen}/>
            </div>
            <div className=' column-right'>
                <h1 className='title'>{producto}</h1>
                <p className='desc'>{descripcion}</p>
                <p className='prec'>${precio}</p>
                <div className='medios'><Link to='/mediosdepago' >Ver los medios de pago</Link></div>
                <div className='talle'>
                    <h3>Talles</h3>
                    <div className='talles'>
                    <p className='small'>S</p>
                    <p className='medium'>M</p>
                    <p className='large'>L</p>
                    </div>
                </div>
                <p className='color'>Color: {color}</p>
                <p className='disponible'>Stock inmediato disponible: {stockd}</p>
                <Counter stock={stockd}/>
                <div className='botones'>
                <button className='compra'>Comprar Ahora</button>
                <button className='agregar'>Agregar al carrito</button>
                </div>
            </div>

        </div>
        )
}


export default ItemDetail;