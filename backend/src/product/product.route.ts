import { Router } from "express";

import productService from "./product.service";
import productvalidation from "./productvalidation";

const productRouter:Router=Router();
productRouter.route('/')
.get(productService.getAll)
.post(productvalidation.createOne,productService.createOne)
// .get(subcategoriesService.filterSubCategory,subcategoriesService.getAll)
// .post(subcategoriesService.setCategoryId,subcategoriesService.createOne)




productRouter.route('/:id')
.get(productvalidation.getOne,productService.getOne)
.put(productvalidation.UpdateOne,productService.updateOne)
.delete(productvalidation.deleteOne,productService.deleteOne);

export default productRouter;

