import {
     model,
     Schema 
} from "mongoose";
import { TAcademicSemister} from "./academicSemister.interface";
import { 
    academicSemisterCodeSchema, 
    academicSemisterMonths,
    academicSemisterNameSchema 
} from "./academicSemister.constant";


const academicSemisterSchema =new Schema<TAcademicSemister>({
    name:{
        type:String,
        required:true,
        enum:academicSemisterNameSchema
    },
    code:{
        type:String,
        required:true,
        enum:academicSemisterCodeSchema
    },
    year:{
        type:Date,
        required:true
    },
    startMonth:{
        type:String,
        required:true,
        enum:academicSemisterMonths
    },
    endMonth:{
        type:String,
        required:true,
        enum:academicSemisterMonths
    }
},
{
    timestamps:true
}
);
export const academicSemister =model<TAcademicSemister>('AcademicSemister',academicSemisterSchema);