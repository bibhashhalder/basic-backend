import { Student } from "./student.interface";
import { studentModel } from "./student.model";

const createStudentIntoDB =async(student:Student)=>{
      const result =await studentModel.create(student)
      return result
}
const getAllStudentFromDB = async ()=>{
      const resul = await studentModel.find();
      return resul;
}
const getSingleStudentFromDB =async(id:string)=>{
      const result =await studentModel.findOne({id});
      return result;
}
export const studentService ={
      createStudentIntoDB,
      getAllStudentFromDB,
      getSingleStudentFromDB
}