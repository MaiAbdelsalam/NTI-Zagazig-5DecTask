import {Router}  from "express";

import userValidation from "./user.validation";
import userService from "./user.service";
import authService from "../authenticator/auth.service";
const userRouter:Router= Router();
// userRouter.use(authService.protectedRoutes);
// userRouter.use( authService.allowedTo('admin'))

userRouter.use(authService.protectedRoutes, authService.checkActive,authService.allowedTo('manage','admin'), authService.allowedTo('admin'));


// userRouter.use('/:categoryId/subcategories', subcategoriesRouter)

userRouter.route('/')
.get(userService.getAll)
.post(userService.uplodaImages,userService.saveImage,userValidation.createOne,userService.createOne);
// categoriesRouter.get('/',categoriesService.getAll);

userRouter.route('/:id')
.get(userValidation.getOne,userService.getOne)
.put(authService.protectedRoutes,userService.uplodaImages,userService.saveImage,userValidation.UpdateOne,userService.updateOne)
.delete(authService.protectedRoutes,userValidation.deleteOne,userService.deleteOne)


userRouter.put('/:id/change-password',userValidation.changePassword,userService.changePassword)
export default userRouter;



