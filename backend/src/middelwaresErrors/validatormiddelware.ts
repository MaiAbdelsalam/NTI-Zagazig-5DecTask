import { Request,Response,NextFunction, RequestHandler } from "express";
// import validationResult from 'express-validator';
import { query, validationResult } from 'express-validator';


const validatorMiddelware:RequestHandler=(req:Request,res:Response,next:NextFunction)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }
    else{
        next()
    }
};
export default validatorMiddelware;