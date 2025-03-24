import express from 'express'
import router from './routes'
import { connectDB } from './config/bd'

const app = express()
const PORT = 3000;

app.use(express.json())
app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

