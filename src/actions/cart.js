
import { types } from "../types/types";
import * as productService from '../services/productService';

export const removeToCart = (productId) => {
    return async (dispatch, getState) => {
        try{
            const { cart  } = getState();
            const cartProducts = cart.cartProducts;
            const index = cartProducts.findIndex( alreadyInCart => alreadyInCart.id === productId )
            if(index !== -1) {
                //cartProducts.remove(index) Este metodo no existe, pero es la filosofia lo importante
            }
            console.log('index: ' + index);

        } catch (error) {
            console.error(error);
        }
    }
}

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
            
            // localStorage.setItem('cart', JSON.stringify(cartProducts))
            

        } catch (error) {
            console.error(error);
        }
    }
}