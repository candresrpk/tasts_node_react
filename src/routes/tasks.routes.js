import { Router } from "express";
import {getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'
import {isAuth} from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', isAuth, getTasks)

router.get('/:id', isAuth, getTask)

router.post('/', isAuth, createTask)

router.patch('/update/:id', isAuth, updateTask)

router.delete('/delete/:id', isAuth, deleteTask)


export default router