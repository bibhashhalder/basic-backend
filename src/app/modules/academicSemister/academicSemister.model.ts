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
        type:String,
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
academicSemisterSchema.pre('save', async function(next){
    const isSemisterExist =await academicSemister.findOne({
        year:this.year,
        name:this.name
    })
    if(isSemisterExist){
        throw new Error('Semister already exist')
    }
    next()
})
export const academicSemister =model<TAcademicSemister>('AcademicSemister',academicSemisterSchema);