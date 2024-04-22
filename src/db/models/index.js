import {Task, TaskSchema} from './tasks.models.js'
import {Auth, AuthSchema} from './auth.models.js'


function setupModels(sequelize){
    Task.init(TaskSchema, Task.config(sequelize)),
    Auth.init(AuthSchema, Auth.config(sequelize))
}


export default setupModels