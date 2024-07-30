/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { userService } from "./user.service";
import sendResponse from "../../utils/sendRespons";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent =catchAsync(async(req,res,next)=>{
    const {password,student:studentData}=req.body;
    const result =await userService.createStudentIntoDB(password, studentData);
    sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Student created successfully',
    data:result
});
});
export const userController ={
    createStudent
};