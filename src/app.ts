/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application,  Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/golobalError'
import notFound from './app/middlewares/notFound'
import router from './app/routes'

const app:Application = express()
app.use(express.json())
app.use(cors())
app.use('/api/v1',router)
const test = (req:Request,res:Response)=>{
   res.send('this server is running now')
}
app.get('/',test)
app.use(globalErrorHandler)
app.use(notFound)
export default app;