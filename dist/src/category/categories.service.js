"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_schema_1 = __importDefault(require("./categories.schema"));
const refactorysechmaservices_1 = __importDefault(require("../refactorysechmaservices"));
class CategoriesService {
    constructor() {
        // handel service for all schemas
        this.getAll = refactorysechmaservices_1.default.getAll(categories_schema_1.default);
        this.createOne = refactorysechmaservices_1.default.createOne(categories_schema_1.default);
        this.getOne = refactorysechmaservices_1.default.getOne(categories_schema_1.default);
        this.updateOne = refactorysechmaservices_1.default.updateOne(categories_schema_1.default);
        this.deleteOne = refactorysechmaservices_1.default.deleteOne(categories_schema_1.default);
        //  getAll=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        //      const categories:Categories[]=await categoriesSchema.find();
        //      res.status(200).json({data:categories});
        //  })
        //  // async createOne(req:Request,res:Response,next:NextFunction){
        //  //     const categories: Categories=await categoriesSchema.create(req.body);
        //  //     res.status(201).json({data:categories});
        //  //  }
        //  createOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        //      const categories: Categories= await categoriesSchema.create(req.body);
        //      res.status(201).json({data:categories})
        //   });
        //   getOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        //      const categories: Categories | null= await categoriesSchema.findById(req.params.id);
        //      res.status(201).json({data:categories})
        //   });
        //   updateOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        //      const categories: Categories| null= await categoriesSchema.findByIdAndUpdate(req.params.id,req.body,{new:true});
        //      res.status(200).json({data:categories})
        //   });
        //   deleteOne=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
        //      const categories:Categories|null=await categoriesSchema.findByIdAndDelete(req.params.id);
        //      res.status(204).json()
        //   });
    }
}
;
const categoriesService = new CategoriesService();
exports.default = categoriesService;
