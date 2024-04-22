import boom  from "@hapi/boom";

import sequelize from "../libs/sequelize.js";

const models = sequelize.models

class TasksService {
    constructor(){

    }


    async find() {

        return {
            'message': 'Finding tasks'
        }
    }

    async findOne(id) {
        return {
            'message': `finding task ${id}`
        }
    }

    async create(data) {
        const newTask = await models.Task.create(data)

        return {
            'message': 'Task created',
            'task': newTask
        }
    }

    async update(id, data) {

        return {
            'message': 'Updating task ' + id
        }
    }

    async delete(id) {

        return {
            'message': 'Deleting task ' + id
        }
    }
}

export default TasksService