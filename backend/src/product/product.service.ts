import { Request,Response,NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { Schema } from "mongoose";
import productSchema from "./product.schema";
import refactorSchemaService from "../refactorysechmaservices";
import { productInterface } from "./product.interface";
 
class ProductService{

    getAll=refactorSchemaService.getAll<productInterface>(productSchema);
    createOne=refactorSchemaService.createOne<productInterface>(productSchema);
    getOne=refactorSchemaService.getOne<productInterface>(productSchema);
    updateOne=refactorSchemaService.updateOne<productInterface>(productSchema);
    deleteOne=refactorSchemaService.deleteOne<productInterface>(productSchema);

    // setCategoryId(req:Request,res:Response,next:NextFunction){
    //     if(req.params.categoryId && !req.body.category){req.body.category=req.params.categoryId}
    //     next()

    // }
    // filterSubCategory(req:Request,res:Response,next:NextFunction){
    //     const filterData:any={};
    //     if(req.params.categoryId){
    //         filterData.category=req.params.categoryId;
    //     }
    //     req.filterData=filterData;
    //     next();
    // }
//     getAll=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
//         // let filterData:any={};
//         // if(req.filterData) filterData=req.filterData
//          const subcategories:subcategoriesInterface[]=await subcategoriesSchema.find(filterData);
//          res.status(200).json({data:subcategories});
//         // let filterData:any={};

//         // if(req.filterData){
//         //     filterData=req.filterData;
//         // }
//         // const subcategories:subcategoriesInterface[]=await subcategoriesSchema.find(req.filterData);
//         // res.status(200).json({data:subcategories});
//     });

//     getOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
//         const subcategories:subcategoriesInterface|null=await subcategoriesSchema.findById(req.params.id);
//         res.status(200).json({data:subcategories});

//     });

//     // createOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
//     //     if(req.params.categoryId && !req.body.category){req.body.category=req.params.categoryId}
//     //     const subcategories:subcategoriesInterface=await subcategoriesSchema.create(req.body);
//     //     res.status(201).json({data:subcategories});

//     // });
//     createOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        
//     // if(req.params.categoryId && !req.body.category) req.body.category=req.params.categoryId
//     const subcategories:subcategoriesInterface=await subcategoriesSchema.create(req.body);
//     res.status(201).json({data:subcategories});

//     });

//     // updateOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
//     //     const subcategories:subcategoriesInterface|null=await subcategoriesSchema.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     //     res.status(201).json({data:subcategories});

//     // });
//     updateOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
//         const subcategories:subcategoriesInterface|null=await subcategoriesSchema.findByIdAndUpdate(req.params.id,{new:true});
//         res.status(201).json({data:subcategories});

//     });
//     deleteOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
//         const subcategories:subcategoriesInterface|null= await subcategoriesSchema.findByIdAndDelete(req.params.id);
//         res.status(204).json();
//     })
}

const productService=new ProductService();
export default productService;