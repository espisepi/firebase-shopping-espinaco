import Cookie from 'js-cookie';

import { types } from "../types/types";
import * as productService from '../services/productService';

/**
 * 
 * @param {string} productId 
 * @param {number} quantity 
 */
export const addToCart = (productId, quantity) => {
    return async (dispatch, getState) => {

        try {

            const product = await productService.findById(productId);
            dispatch({
                type: types.cartAddItem,
                payload: {
                    ...product,
                    quantity
                }
            });
            
            const { cart: { cartITems } } = getState(); // En este punto nuestro cartItems estara modificado con el producto que hemos aniadido
            Cookie.set('cartItems', JSON.stringify(cartITems));
            

        } catch (error) {

        }
    }
}