import express from 'express'
import tasksRouter from './tasks.routes.js';
import authRouter from './auth.routes.js';


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/tasks', tasksRouter)
    router.use('/auth', authRouter)

}


export default routerApi
