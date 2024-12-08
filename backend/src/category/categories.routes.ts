import {Router}  from "express";
import categoriesService from "./categories.service";
import subcategoriesRouter from "../subcategries/subcategories.route";
import categoriesValidation from "./categoriesvalidation";
import { body } from "express-validator";
import validatorMiddelware from "../middelwaresErrors/validatormiddelware";
import categoriesSchema from "./categories.schema";
import { error } from "console";
const categoriesRouter:Router= Router();

categoriesRouter.use('/:categoryId/subcategories', subcategoriesRouter)

categoriesRouter.route('/')
.get(categoriesService.getAll)
.post(categoriesValidation.createOne,categoriesService.createOne);
// categoriesRouter.get('/',categoriesService.getAll);

categoriesRouter.route('/:id')
.get(categoriesValidation.getOne,categoriesService.getOne)
.put(categoriesValidation.UpdateOne,categoriesService.updateOne)
.delete(categoriesValidation.deleteOne,categoriesService.deleteOne)
export default categoriesRouter;


