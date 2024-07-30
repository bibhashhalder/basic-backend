import { Model, Types } from "mongoose";

export type TUserName = {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
  };
  export type TLocalGuardian = {
    name: string;
    address: string;
    contactNo: string;
    occupation: string;
  };
  export type TStudent = {
    id: string;
    user:Types.ObjectId
    password:string;
    name: TUserName;
    gender: "male" | "female"|'other';
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isDeleted:boolean;
  };

  // for creating static method
  export interface studentModel extends Model<TStudent>{
    isUserExist(id:string):Promise<TStudent|null>
  }
  // for  creating instance
  // export type studentMethods ={
  //   isUserExist(id:string):Promise<TStudent|null>
  // }
  // export type studentModel = Model<TStudent, Record<string, never>,studentMethods>
  