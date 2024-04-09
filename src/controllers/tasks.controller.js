import TasksServices from '../services/tasks.service.js'


const service = new TasksServices()

export const getTasks = async (req, res, next) => {
    try {
        const tasks = await service.find()
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}



export const getTask = async (req, res, next) => {

    try {
        const {id} = req.params
        const task = await service.findOne(id)

        res.status(200).json(task)
    } catch (error) {
        next(error)
    }
}

export const createTask = async (req, res, next) => {
    try {
        const data = req.body
        const newTask = await service.create(data)
        res.status(201).json(newTask)
    } catch (error) {
        next(error)
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = req.body
        const updatedTask = await service.update(id, data)
        res.status(200).json(updatedTask)
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const {id} = req.params
        const taskToDelete = await service.delete(id)
        res.status(204).json(taskToDelete)
    } catch (error) {
        next(error)
    }
}