import { types } from "../types/types";
import * as productService from '../services/productService';


export const startLoadingProducts = () => {
    return async( dispatch ) => {
        const products = await productService.findAll();
        dispatch( setProducts( products ) );
    }
}

export const setProducts = ( products ) => ({
    type: types.productsLoad,
    payload: products
});