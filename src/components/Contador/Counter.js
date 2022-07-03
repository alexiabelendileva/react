import {useEffect, useState} from "react";
import './Counter.css'

function Counter({stock}){

    const [num, setNum] = useState(1);


    const onAdd = () => {
    num < (stock) ? setNum(num+1) : setNum (stock);
    }
    
    const onSubstract =() => {
        num>1 ? setNum(num-1) : setNum(1);
    }
    return(
        <>
            <div>
                <div className="cont">
                    <button className="btn btn-info btn-sm" onClick={onAdd} disabled={num === stock ? true : false}>
                        +
                    </button>
                    <p id="num">{num}</p>
                    <button className="btn btn-danger btn-sm" onClick={onSubstract} disabled={num===1 ? true : false}>
                        -
                    </button>            
                </div>
            </div>
        </>
    )
}

export default Counter;