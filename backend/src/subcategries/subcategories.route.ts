import { Router } from "express";
import subcategoriesService from "./subcategories.service";
import subcategoriesValidation from "./subcategoriesvalidation";

const subcategoriesRouter:Router=Router({mergeParams:true});
subcategoriesRouter.route('/')
.get(subcategoriesService.filterDataSubcategory,subcategoriesService.getAll)
.post(subcategoriesService.setCategoryId,subcategoriesValidation.createOne,subcategoriesService.createOne)
// .get(subcategoriesService.filterSubCategory,subcategoriesService.getAll)
// .post(subcategoriesService.setCategoryId,subcategoriesService.createOne)




subcategoriesRouter.route('/:id')
.get(subcategoriesValidation.getOne,subcategoriesService.getOne)
.put(subcategoriesValidation.UpdateOne,subcategoriesService.updateOne)
.delete(subcategoriesValidation.deleteOne,subcategoriesService.deleteOne);

export default subcategoriesRouter;
