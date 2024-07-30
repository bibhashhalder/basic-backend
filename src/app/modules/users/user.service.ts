import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
// import { Student } from "../student/student.model";
import { User } from "./user.model";

const createStudentIntoDB =async(password:string,studentData:TStudent)=>{
    // if(await Student.isUserExist(studentData.id)){
    //       throw new Error('User already exist')
    // }
    const userData:Partial<TUser>={}
    userData.password =password||config.default_password as string
    userData.roll = 'student'
    userData.id= '2030100001'
    const NewUser =await User.create(userData);
    if(Object.keys(NewUser).length){
        studentData.id=NewUser.id;
        studentData.user= NewUser._id;
        const newStudent =await Student.create(studentData);
        return newStudent;
    }
}
export const userService ={
    createStudentIntoDB
}