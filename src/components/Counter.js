import {useState} from "react";
import './Counter.css'

function Counter(){
    const [num, setNum] = useState(0);

    const suma = () => {
        setNum(num+1)
    }
    
    const resta =() => {
        setNum(num-1)
    }
    return(
        <>
            <div>
                <div className="cont">
                    <button className="btn btn-info btn-sm" onClick={suma}>
                        +
                    </button>
                    <p id="num">{num}</p>
                    <button className="btn btn-danger btn-sm" onClick={resta}>
                        -
                    </button>            
                </div>
            </div>
        </>
    )
}

export default Counter;