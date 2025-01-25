import { useState } from "react"

 const CounterApp=({initialValue}) => {
    // declarando variables de estado
     const [counter, setCounter] = useState(initialValue);

     function handleAdd() {
        setCounter(counter+1)
     }

     function handleSubstraction() {
        setCounter(counter-1)
     }

     function reset() {
        setCounter(initialValue)
     }

     return (
        <>
        <h1>{counter}</h1>
        <button onClick = {handleAdd}>+1</button>
        <button onClick = {handleSubstraction}>-1</button>
        <button onClick = {reset}>Reset</button>
        </>
     )
}

export default CounterApp