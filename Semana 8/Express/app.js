const http = require ('http')
const PORT = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html')
    res.write('<h1>Este es mi server node.js</h1>')
})


server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})