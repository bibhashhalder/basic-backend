import { academicSemisterNameCodeMapper } from "./academicSemister.constant";
import { TAcademicSemister } from "./academicSemister.interface";
import { academicSemister } from "./academicSemister.model";

const createAcademicSemisterIntoDB =async(payload:TAcademicSemister)=>{
    
    
    if(academicSemisterNameCodeMapper[payload.name]!=payload.code){
        throw new Error('Name and Code dose not match')
    }
    const result = await academicSemister.create(payload);
    return result;
}
export const academicSemisterService ={
    createAcademicSemisterIntoDB
}