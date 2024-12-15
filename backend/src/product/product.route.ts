import { NextFunction, Router } from "express";
import multer, { Multer } from "multer";
import { Request,Response } from "express";
import productService from "./product.service";
import productvalidation from "./productvalidation";
import sharp from "sharp";

// const storage=multer.diskStorage({
//     destination:(req:Request,filename,cb)=>{
//         cb(null,'uploads/images/products')

//     },
//     filename:(req:Request,file,cb)=>{
//         const ext=file.mimetype.split('/')[1];
//         const fileName:string=`product-${Date.now()}-cover.${ext}`;
//         cb(null,fileName)
//     }
// })
// const upload=multer({storage:storage})
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/images/products');
//     },
//     filename: (req, file, cb) => {
//         const ext = file.mimetype.split('/')[1];
//         const fileName: string = `product-${Date.now()}-cover.${ext}`;
//         cb(null, fileName);
//     }
// })


// const upload=multer({dest:'uploads/images/products'});

const productRouter:Router=Router();
productRouter.route('/')
.get(productService.getAll)
.post(productService.uploadImages,productService.saveImage,productvalidation.createOne,productService.createOne)

// .post(upload.single('cover'),productvalidation.createOne,productService.createOne)
// .get(subcategoriesService.filterSubCategory,subcategoriesService.getAll)
// .post(subcategoriesService.setCategoryId,subcategoriesService.createOne)

productRouter.route('/:id')
.get(productvalidation.getOne,productService.getOne)
.put(productService.uploadImages,productService.saveImage,productvalidation.UpdateOne,productService.updateOne)
.delete(productvalidation.deleteOne,productService.deleteOne);

export default productRouter;

