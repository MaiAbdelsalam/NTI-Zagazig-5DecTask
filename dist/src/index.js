"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_routes_1 = __importDefault(require("./category/categories.routes"));
const subcategories_route_1 = __importDefault(require("./subcategries/subcategories.route"));
const middelwares_error_1 = __importDefault(require("./middelwaresErrors/middelwares.error"));
const ApiErrors_1 = __importDefault(require("./utilsuses/ApiErrors"));
const mountRoutes = (app) => {
    app.use("/api/v1/categories", categories_routes_1.default);
    app.use('/api/v1/subcategories', subcategories_route_1.default);
    //errors    
    // error for notfound category or product  
    app.all("*", (req, res, next) => {
        // const error= new Error('route/ele not found');
        next(new ApiErrors_1.default(`route ${req.originalUrl} is not found please solve it`, 400));
    });
    app.use(middelwares_error_1.default);
    //  الفنكشن دي هي والفنكشن الموجوده اخر حاجه في ملف الاندكس كنت بستخدمهم عشان اعمل كرييت لل ايرور وابتدي 
    // استخدمه لكن وقفتهم عشان هستبدلهم بملفات الميدويير الديفلوب والبرودكشن والجلوبال
    // app.all("*",(req:express.Request,res:express.Response,next:NextFunction)=>{
    //     const error= new Error('route/ele not found');
    //     next(error);
    // });
};
exports.default = mountRoutes;
