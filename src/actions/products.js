import { types } from "../types/types";
import { loadProducts } from '../helpers/loadProducts';


export const startLoadingProducts = () => {
    return async( dispatch ) => {
        const products = await loadProducts();
        dispatch( setProducts( products ) );
    }
}

export const setProducts = ( products ) => ({
    type: types.productsLoad,
    payload: products
});