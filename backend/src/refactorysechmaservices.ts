

import express from 'express'
import { Request,Response,NextFunction } from "express";
import ApiErrors from './utilsuses/ApiErrors';
import asyncHandler from "express-async-handler";
import mongoose, { modelNames, mongo, Schema } from "mongoose";
import { Document } from "mongoose";
import Features from './utilsuses/features';
class RefactorSchemaService{
   
   getAll=<modelType>(model:mongoose.Model<any>,modelName?:string)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
      let filterData:any={};
      if(req.filterData) filterData=req.filterData;

      let features = new Features(model.find(filterData), req.query).filter().sort().limitFields().search(modelName!);
      let {moongoseQuery}=features;
      
      const document:modelType[]= await moongoseQuery;
      const documentsCount =document.length
      features=features.pagination(documentsCount)
      let {paginationResult}=features;
            console.log(documentsCount)
      
      res.status(200).json({pagination:paginationResult, length: documentsCount,data:document})
      console.log(`pagination ${documentsCount}`)

          console.log(req.query)
 
   })

   createOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
      const Document: modelType= await model.create(req.body);
      res.status(201).json({data:Document})
   });

   getOne=<modelType>(model:mongoose.Model<any>,modelName?:string,populationObj?:string)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction):Promise<void>=>{
      let query: any= await model.findById(req.params.id);
      if(populationObj) query=query.populate(populationObj)
      const Document: any= await query;
      if(!Document) return next(new ApiErrors(`${req.__('not_found')}`,404));

      res.status(200).json({data:Document})
   });

   updateOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction):Promise<void>=>{
      const Document: modelType| null= await model.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
      if(!Document) return next(new ApiErrors(`${req.__('not_found')} `,404));
      res.status(201).json({data:Document})
   });
   deleteOne=<modelType>(model:mongoose.Model<any>)=>asyncHandler(async(req:express.Request,res:express.Response,next:express.NextFunction)=>{

      const Document:modelType|null=await model.findByIdAndDelete(req.params.id);
      if(!Document) return next(new ApiErrors(`${req.__('not_found')} `,404));
      res.status(204).json()
   });
}
 const refactorSchemaService =new RefactorSchemaService() ;
export default refactorSchemaService;

