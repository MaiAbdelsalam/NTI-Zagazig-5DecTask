"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subcategories_schema_1 = __importDefault(require("./subcategories.schema"));
const refactorysechmaservices_1 = __importDefault(require("../refactorysechmaservices"));
class SubcategoriesService {
    constructor() {
        this.getAll = refactorysechmaservices_1.default.getAll(subcategories_schema_1.default);
        this.createOne = refactorysechmaservices_1.default.createOne(subcategories_schema_1.default);
        this.getOne = refactorysechmaservices_1.default.getOne(subcategories_schema_1.default);
        this.updateOne = refactorysechmaservices_1.default.updateOne(subcategories_schema_1.default);
        this.deleteOne = refactorysechmaservices_1.default.deleteOne(subcategories_schema_1.default);
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
    setCategoryId(req, res, next) {
        if (req.params.categoryId && !req.body.category)
            req.body.category = req.params.categoryId;
        next();
    }
    filterDataSubcategory(req, res, next) {
        const filterData = {};
        if (req.params.categoryId) {
            filterData.category = req.params.categoryId;
            req.filterData = filterData;
        }
        next();
    }
}
const subcategoriesService = new SubcategoriesService();
exports.default = subcategoriesService;
