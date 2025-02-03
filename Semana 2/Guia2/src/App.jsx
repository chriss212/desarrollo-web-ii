import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { db } from './data/db'
import { Guitar } from './components/Guitar'

function App() {

  function initialCart() {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart): []
  }

  const[data, setData] = useState(db)
  const [cart, setCart] = useState(initialCart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(guitar) {
    const itemIndex = cart.findIndex((item) => guitar.id===item.id)
    console.log(itemIndex)

    if (itemIndex === -1) {
      guitar.quantity=1;
      setCart([...cart, guitar])
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++
      setCart(updatedCart)

    }

  }

  function calculateTotal() {
/*     let total = 0
    for (const guitar of cart) {
      total+=guitar.price * quantity
    }

    return total */
    let total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    return total
  }



  const increase = (id) => {
    setCart(cart.map(item=> item.id === id ? { ...item, quantity: item.quantity + 1} : item))
  }

  const decrease = (id) => {
    setCart(cart.map(item=> item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1} : item))
  }

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clear = () => {
    setCart([])
  }


  
  return (
    <>


    <Header cart={cart} total={calculateTotal()} increase={increase} decrease={decrease} remove={remove} clear={clear}/>

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar guitar = {guitar} key = {guitar.id} addToCart={addToCart}/>
          ))}



        </div>

            
    </main>
    <Footer/>

    </>
  )
}

export default App
