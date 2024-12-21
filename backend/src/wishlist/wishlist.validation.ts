import validatorMiddelware from "../middelwaresErrors/validatormiddelware";
import UserSchema from "../user/user.schema"
import { body } from "express-validator";
import productSchema from "../product/product.schema";


class WishlistValidation{

addtoWishlist=[
    body('productId').isMongoId().withMessage((val,{req})=>`${req.__('mongo_id')}`)
    .custom(async(val,{req})=>{
        let product=await productSchema.findById(val)
        if(!product) throw new Error(`${req.__('validation_email_check')}`)
        return true
        })
    ,

    validatorMiddelware

]
}
const wishlistValidation=new WishlistValidation()
export default wishlistValidation
