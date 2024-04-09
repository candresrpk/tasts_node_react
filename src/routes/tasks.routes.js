import { Router } from "express";


const router = Router()

router.get('/', (req, res) => {
    res.send('getting all the tasks')
})

router.get('/:id', (req, res) => {

    const {id} = req.params

    res.send('getting a task ' + id)
})

router.post('', (req, res) => {
    res.send('making a task')
})

router.patch('update/:id', (req, res) => {
    res.send('updating a task')
})

router.delete('delete/:id', (req, res) => {
    res.send('deleting a ')
})


export default router