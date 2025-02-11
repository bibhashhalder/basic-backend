/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";

const globalErrorHandler=(error:any, req:Request,res:Response,next:NextFunction)=>{
    const statusCode =500;
    const message =error.message||'something went worng';
    return res.status(statusCode).json({
       success:false,
       message,
       error:error
    })
 }
 export default globalErrorHandler;