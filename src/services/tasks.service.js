import boom  from "@hapi/boom";

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

        return {
            'message': data
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