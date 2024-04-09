import express from 'express'
import morgan from 'morgan';

import routerApi from './routes/index.js'
import {logErrors, errorHandler, boomErrorHandler} from './middlewares/error.handler.js'


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.json({'message':'welcome to my api'})
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)




export default app;