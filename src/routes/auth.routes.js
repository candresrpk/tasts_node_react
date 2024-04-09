import { Router } from "express";


const router = Router()

router.post('/signin', (req, res) => {
    res.send('ingresando')
})

router.post('/signup', (req, res) => {
    res.send('registrando')
})

router.post('/signout', (req, res) => {
    res.send('cerrando')
})

router.get('/profile', (req, res) => {
    res.send('user profile')
})


export default router