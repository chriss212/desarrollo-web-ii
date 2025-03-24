import { Router } from "express"

const router = Router()

let variable = 10

router.get("/", (req, res) => {
    res.send("Bienvenido a la API")
})

router.post("/", (req, res) => {
    console.log(req.body)
})

export default router