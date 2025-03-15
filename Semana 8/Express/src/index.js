import app from './server.js'

const PORT = 3000

/* app.get('/', (req, res) => {
    res.send('Hola mundo en express')
})

app.get('/login', (req, res) => {
    res.send('Formulario de inicio de sesion')
})

app.get('/logout', (req, res) => {
    res.send('Sesión cerrada exitosamente')
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Creando usuario...')
}) */

app.listen(PORT, () => {
    console.log(`Servidor express iniciado en el puerto ${PORT}`)
})