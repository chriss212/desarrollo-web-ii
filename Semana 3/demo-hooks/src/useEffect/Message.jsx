import { useEffect } from "react"

export const Message = () => {
    
    const mouseMoveListener = (event) => {
        console.log(event)
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveListener)
        
        // console.log('Message mounted')
        return () => {
            window.removeEventListener('mousemove', mouseMoveListener)
            console.log('Message unmounted')
        }
    }, [])

  return (
    <div><span className="badge bg-danger">Este usuario ya existe</span></div>
  )
}


