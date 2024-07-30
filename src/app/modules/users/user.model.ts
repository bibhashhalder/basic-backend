/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";
const userSchema = new Schema<TUser>({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    needsPasswordChange:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        enum:['admin' , 'student' , 'faculty' ]
    },
    status:{
        type:String,
        enum:['in-progress' , 'blocked']
    },
    isDeleted:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true
})
// pre save middleware
userSchema.pre('save',async function(next){
    // console.log(this, 'pre hook: we save the data');
    const user =this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round));
    next()
  })
  // post save middleware
  userSchema.post('save', function(doc, next){
    doc.password =''
    console.log('post hook: we will save the data after post hook call ');
    next()
  })
export const User = model<TUser>('User', userSchema)