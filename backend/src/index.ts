import categoriesRouter from "./category/categories.routes";
import subcategoriesRouter from "./subcategries/subcategories.route";
import globalErrors from "./middelwaresErrors/middelwares.error";
import ApiErrors from "./utilsuses/ApiErrors";
import express from 'express';
import { Request,Response,NextFunction } from "express";
import productRouter from "./product/product.route";
import userRouter from "./user/user.routes";
import authRouter from "./authenticator/auth.route"
import { UserInterface } from "./user/user.interface";
// declare module "express"{
//     interface Request{
//         filterData?:any;
//     }
// }

declare module  "express"{
    interface Request{
        filterData?:any
        req?:any
        files?:any
        user?:any
    }
}

const mountRoutes=(app:express.Application)=>{
    app.use("/api/v1/categories",categoriesRouter)
    app.use('/api/v1/subcategories',subcategoriesRouter);
    app.use('/api/v1/product',productRouter);
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/user",userRouter)





//errors    
// error for notfound category or product  
     app.all("*",(req:Request,res:Response,next:NextFunction)=>{
        // const error= new Error('route/ele not found');
        next(new ApiErrors(`route ${req.originalUrl} is not found please solve it`,400));
        
    });
    app.use(globalErrors);

    //  الفنكشن دي هي والفنكشن الموجوده اخر حاجه في ملف الاندكس كنت بستخدمهم عشان اعمل كرييت لل ايرور وابتدي 
    // استخدمه لكن وقفتهم عشان هستبدلهم بملفات الميدويير الديفلوب والبرودكشن والجلوبال
    // app.all("*",(req:express.Request,res:express.Response,next:NextFunction)=>{
    //     const error= new Error('route/ele not found');
    //     next(error);
    // });


};

export default mountRoutes;

