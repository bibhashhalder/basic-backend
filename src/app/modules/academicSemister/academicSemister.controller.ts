/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { academicSemisterService } from "./academicSemister.service";

const createAcademicSemister =catchAsync(async(req, res, next)=>{
    const result = await academicSemisterService.createAcademicSemisterIntoDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Academic semister is created successfully',
        data:result
    })
})
export const academicSemisterController ={
    createAcademicSemister
}