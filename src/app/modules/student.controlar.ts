import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent =async (req:Request, res:Response)=>{
    try{
        const {student:studentData} =req.body
        const result = await studentService.createStudentIntoDB(studentData)
        res.status(200).json({
            success:true,
            message:'Strudent created successfully',
            data:result
        })
    }catch(error){
        console.log(error);
    }
}
const getAllStudents = async (req:Request,res:Response)=>{
   try{
    const result = await studentService.getAllStudentFromDB()
    res.status(200).json({
        success:true,
        message:'Students retrive successfully',
        data:result
    })
   }catch(error){
    console.log(error);
   }
}
const getSingleStudent =async(req:Request, res:Response)=>{
    try{
        const studentId =req.params.studentId
        const result =await studentService.getSingleStudentFromDB(studentId)
        res.status(200).json({
            success:true,
            message:'Students are retrive successfully',
            data:result
        })
    }catch(error){
        console.log(error);
    }
}
export const studentControlar ={
    createStudent,
    getAllStudents,
    getSingleStudent
}