// import Jwt from "jsonwebtoken";
// class CreateTokens {
//     accessToken = (id: any, role: string) =>
//         Jwt.sign({_id: id, role}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPIRE})
// }
// const createTokens = new CreateTokens();
// export default createTokens;
import Jwt from "jsonwebtoken";
class CreateTokens {
    accessToken = (id: any, role: string) =>
        Jwt.sign({_id: id, role:role}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPIRE})
}
const createTokens = new CreateTokens();
export default createTokens

// export const createToken=(payload:any,role:string)=>{
//         Jwt.sign({_id: payload, role:role}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPIRE})
// }
// export const createResetToken=(payload:any,role:string)=>{
//     Jwt.sign({_id: payload, role:role}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_RESET_EXPIRE})




