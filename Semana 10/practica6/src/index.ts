import { connectBD } from "./config/db";
import router from "./routes";
import express from 'express';

const PORT = 3000;
const app = express()

app.use(express.json())
app.use('/', router)

connectBD()
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

export default app
