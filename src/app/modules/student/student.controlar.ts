/* eslint-disable @typescript-eslint/no-unused-vars */
import { studentService } from "./student.service";
import sendResponse from "../../utils/sendRespons";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";


const getAllStudents = catchAsync(async (req,res,next)=>{
     const result = await studentService.getAllStudentFromDB()
     sendResponse(res, {
         statusCode:httpStatus.OK,
         success:true,
         message:'Student retrive successfully',
         data:result
     })
 });
const getSingleStudent =catchAsync(async(req, res,next)=>{
    
    const studentId =req.params.studentId
    const result =await studentService.getSingleStudentFromDB(studentId)
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:'Student retrive successfully',
        data:result
    })
});
const deleteStudent =catchAsync(async(req, res, next)=>{
    const {studentId} =req.params
    const result =await studentService.deleteSingleStudentFromDB(studentId);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:'Student delet successfully',
        data:result
    })
})
export const studentControlar ={
    
    getAllStudents,
    getSingleStudent,
    deleteStudent
}