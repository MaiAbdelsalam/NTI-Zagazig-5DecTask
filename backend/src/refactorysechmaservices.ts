import express from 'express'
import { Request,Response,NextFunction } from "express";
import ApiErrors from './utilsuses/ApiErrors';
import asyncHandler from "express-async-handler";
import mongoose, { mongo, Schema } from "mongoose";
import { Document } from "mongoose";
// const model:mongoose.Model=<modelType>(model)
class RefactorSchemaService{
   
   getAll=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
      let filterData:any={};
      if(req.filterData) filterData=req.filterData;
      const Document:modelType[]=await model.find(filterData);
      res.status(200).json({data:Document});
   })
   // async createOne(req:Request,res:Response,next:NextFunction){
   //     const categories: Categories=await categoriesSchema.create(req.body);
   //     res.status(201).json({data:categories});
   //  }
   createOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
      const Document: modelType= await model.create(req.body);
      res.status(201).json({data:Document})
   });

   getOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction):Promise<void>=>{
      const Document: modelType | null= await model.findById(req.params.id);
      if(!Document) return next(new ApiErrors(`${req.__('not_found')}`,404));

      res.status(201).json({data:Document})
   });

   updateOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction):Promise<void>=>{
      const Document: modelType| null= await model.findByIdAndUpdate(req.params.id,req.body,{new:true});
      if(!Document) return next(new ApiErrors(`${req.__('not_found')} `,404));
      res.status(200).json({data:Document})
   });
   deleteOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction)=>{

      const Document:modelType|null=await model.findByIdAndDelete(req.params.id);
      if(!Document) return next(new ApiErrors(`${req.__('not_found')} `,404));

      res.status(204).json()
   });
}
 const refactorSchemaService =new RefactorSchemaService() ;
export default refactorSchemaService;