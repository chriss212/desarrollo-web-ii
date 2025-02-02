import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = counter

  return (
    <>
    <div className="container">
        <h1>CounterApp</h1>
        <hr />
        <h2>Counter 1: {counter1}</h2>
        <h2>Counter 2: {counter2}</h2>
        <h2>Counter 3: {counter3}</h2>

        <button className="btn btn-primary" onClick={() => setCounter({
            ...counter,
            counter1:counter1+1, counter2:counter2+2, counter3:counter3+3
        })}>+</button>
    </div>
    </>
  )
}
