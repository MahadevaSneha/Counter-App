import {useState} from "react";

const Counter= () =>{
    const [state,setState]=useState(0);

    let handleIncrement= () => {
        setState(() => state+1);
    };
    function handleDecrement(){
        setState(() => state-1);
    }
    function handleReset(){
        setState(0);
    }


    

    return (
    <div>
    <h1>Count:{state}</h1>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    );

}
export default Counter;