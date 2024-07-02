import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { studentRoute } from './app/modules/student.route'
const app:Application = express()
// parser
app.use(express.json())
app.use(cors())
app.use('/api/v1/students',studentRoute)
const getAController = (req:Request,res:Response)=>{
   res.send('this server is running now')
}
app.get('/',getAController)
export default app;