import { useCounter } from "../hooks/useCounter"

export const CounterAppWithCustomHooks = () => {

    const{counter, increment, decrement, reset} = useCounter(10)

    return (
    <div className='container'>
        <h1>CounterAppWithCustomHooks</h1>
        <hr />
        <h2>Contador: {counter}</h2>
        <button className='btn btn-primary mx-1' onClick={increment}>+</button>
        <button className='btn btn-primary mx-1' onClick={decrement}>-</button>
        <button className='btn btn-primary mx-1' onClick={reset}>Reset</button>

    </div>
  )
}

export default CounterAppWithCustomHooks