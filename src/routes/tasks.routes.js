import { Router } from "express";
import {getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'


const router = Router()

router.get('/', getTasks)

router.get('/:id', getTask)

router.post('/', createTask)

router.patch('/update/:id', updateTask)

router.delete('/delete/:id', deleteTask)


export default router