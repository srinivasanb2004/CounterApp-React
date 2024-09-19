import { useState } from "react";
import "./style.css"

function CounterApp(){

    const [count,setcount] = useState(0)

    function increment()
    {
        setcount(count+1)
    }

    function decrement()
    {
        setcount(count-1)
    }

    return(
        <div className="container">
        <h1 className="title">Counter App</h1>
        <h1 className="num">{count}</h1>
        <button onClick={increment} className="btn1">INCREMENT</button>
        <button onClick={decrement} className="btn2">DECREMENT</button>
        </div>
    )

}

export default CounterApp