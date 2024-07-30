import { Student } from "./student.model";

const getAllStudentFromDB = async ()=>{
      const resul = await Student.find();
      return resul;
}
const getSingleStudentFromDB =async(id:string)=>{
      // const result =await Student.findOne({id});
      const result = await Student.aggregate([{ $match: { id } }]);
      return result;
}
const deleteSingleStudentFromDB =async(id:string)=>{
      const result =await Student.updateOne({id},{isDeleted:true});
      return result
}
export const studentService ={
      getAllStudentFromDB,
      getSingleStudentFromDB,
      deleteSingleStudentFromDB
}