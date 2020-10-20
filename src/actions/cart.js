import Cookie from 'js-cookie';

import { types } from "../types/types";
import * as productService from '../services/productService';

/**
 * 
 * @param {string} productId 
 * @param {number} quantity 
 */
export const addToCart = (productId, quantity = 1) => {
    return async (dispatch, getState) => {

        try {
            const { cart  } = getState();
            const cartProducts = cart.cartProducts;
            const product = await productService.findById(productId);
            const productInCart = cartProducts.find( alreadyInCart => alreadyInCart.id === product.id );
            if(productInCart) {
                quantity += productInCart.quantity;
            }

            dispatch({
                type: types.cartAddProduct,
                payload: {
                    ...product,
                    quantity
                }
            });
            
            
            
            // Cookie.set('cartProducts', JSON.stringify(cartProducts));
            

        } catch (error) {
            console.error(error);
        }
    }
}