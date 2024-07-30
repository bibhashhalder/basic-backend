/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model} from "mongoose";

import { studentModel, TGuardian, TLocalGuardian, TStudent, TUserName } from "./student.interface";
const userNameSchema = new Schema<TUserName>({
  firstName: { 
      type: String,
      required: [true,'First name is required'],
      maxlength:[8, 'first name more than 8 charecter'] ,
      trim:true,
      validate:{
        validator:function(value:string){
          const firstNameStr =value.charAt(0).toUpperCase() + value.slice(1)
          return firstNameStr === value;
        },
        message:'{VLUE} is not start with uppercase'
      }
  },
  middleName: { 
    type: String 
  },
  lastName: { 
    type: String, 
    required: [true, 'Last name is required'],
    maxlength:[8, 'Last name more than 8 charecter' ],
  },
});
const guardianSchema = new Schema<TGuardian>({
  fatherName: { 
    type: String, 
    required: [true,'Father name is required'] 
  },
  fatherOccupation: { 
    type: String, 
    required: [true,'Father occupation is required'] 
  },
  fatherContactNo: { 
    type: String, 
    required: [true, 'Father contact number is required'] 
  },
  motherName: { 
    type: String, 
    required: [true,'Mother name is required'] 
  },
  motherOccupation: { 
    type: String, 
    required: [true,'Mother occupation is required'] 
  },
  motherContactNo: { 
    type: String, 
    required: [true, 'Mother contact number is required'] 
  },
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  address: { 
    type: String, 
    required: [true, 'Address is required'] 
  },
  contactNo: { 
    type: String, 
    required: [true, 'Contact number is required'] 
  },
  occupation: { 
    type: String ,
    required:[true, 'Occupation is required']
  },
});
const studentSchema = new Schema<TStudent, studentModel>({
  id: { 
    type: String, 
    required: [true, 'Id is required'], 
    unique:true 
  },
  user:{
    type:Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique:true,
    ref:'User'
  },
 
  name: {
    type:userNameSchema,
    required:[true, 'User name is required']
  },
  gender: {
    type:String,
    enum:{
      values:["male", "female",'other'],
      message:"Gender should be one of the flowing . 'male', 'female','other'"
    },
    required:[true, 'Gender is required']
  },
  dateOfBirth: { 
    type: String, 
    required: [true, 'Date of Birth is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique:true 
  },
  contactNo: { 
    type: String, 
    required: [true, 'Contact number is required'] 
  },
  emergencyContactNo: { 
    type: String, 
    required: [true, 'Emargency Contact number is required'] 
  },
  bloodGroup: {
    type:String,
    enum:{
      values:["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        message:'{VALUE} is not a valid blood group'
      }
  },
  presentAddress: { 
    type: String, 
    required: [true, 'Present address is required'] 
  },
  permanentAddress: { 
    type: String, 
    required: [true, 'Permanent address is required'] 
  },
  guardian: {
    type:guardianSchema,
    required:[true, 'Guardian information is required']
  },
  localGuardian: {
    type:localGuardianSchema,
    required:[true, 'Local guardian information is required']
  },
  profileImg:{
    type:String
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
},
{
  toJSON:{
    virtuals:true
  }
});

// mongoose virtual
studentSchema.virtual('fullName').get(function(){
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
})
// Quary middleware
studentSchema.pre('find', async function(next){
  this.find({isDeleted:{$ne:true}})
//  console.log(this);
  next()
})
studentSchema.pre('findOne', async function(next){
  this.find({isDeleted:{$ne:true}})
//  console.log(this);
  next()
})
studentSchema.pre('aggregate', async function(next){
  this.pipeline().unshift({$match:{isDeleted:{$ne:true}}})
//  console.log(this);
  next()
})
// creating custom static method
studentSchema.statics.isUserExist = async function(id:string){
  const existingUser =await Student.findOne({id});
  return existingUser;
};


export const Student =model<TStudent, studentModel>('Student', studentSchema);