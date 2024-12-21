import {Router} from 'express';
import cartService from './cart.service';
import cartValidation from './cartvalidation';

import authService from '../authenticator/auth.service';

const cartRouter: Router = Router();

// categoriesRouter.use('/:categoryId/subcategories', subcategoriesRouter);
cartRouter.use(authService.protectedRoutes, authService.checkActive,authService.allowedTo('user'))


cartRouter.route('/')
    .get(cartService.getCart)
    .post(cartService.addToCart)
    .delete(cartService.clearCart)

    cartRouter.route('/:itemId')
    .put(cartService.updateQuantity)
    .delete(cartService.removeFromCart);

cartRouter.put('/apply-coupon', cartService.applcopoun);
export default cartRouter;