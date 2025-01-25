const name = 'Christian'
const departamentos = ["San Salvador", "Morazan", "La Libertad"]
const personalData = {
    firstName: "Christian",
    lastName: "Sánchez"
}

export const HelloWorldApp = () => {
    return (
        // para poner varias etiquetas se pone una vacía ya que debe de retornar una sola etiqueta padre
        <>
        <div>
            <h1>Hola {name}</h1>
            <h2>{departamentos}</h2>
            <h2>{personalData.lastName}</h2> 
        </div>

        <div>
            <h2>{departamentos}</h2>
        </div>
        </>
    )
}