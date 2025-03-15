import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.send('Bienvenido a la API')
})

router.get('/user', (req, res) => {
    const users = [
        { 
            userId: 1,
            username: "Christian"
        },
        {
            userId: 2,
            username: "John"  
        }
    ]

})

router.get('/user/:id', (req, res) => {
    const id  = req.params.id
    console.log(`Recuperando el usuario con el ${id}`)
    res.json(users.filter(user => user.userId == id)[0])
})

router.post('/user', (req, res) => {
    users.push(req.body)
    res.send(`Usuario con username ${req.bodyusername} creado exitosamente`)
})

export default router