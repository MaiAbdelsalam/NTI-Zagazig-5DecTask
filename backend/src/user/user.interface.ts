import { Document } from "mongoose";
export interface UserInterface extends Document{
   readonly username:string
   readonly name:string
   readonly email:string
            password:string
   readonly role:UserRole
   readonly active:boolean
   readonly googlId:string
   readonly hasPassword:boolean
   readonly passwordChangedAt:Date | number
   readonly passwordResetCode:string | undefined
   readonly passwordCodeVerify:boolean
   readonly passwordResetCodeExpores:Date | number | undefined
            image:string;
};

// type Role='admin'|'employee'|'user'
type UserRole='admin'|'employee'|'user'


