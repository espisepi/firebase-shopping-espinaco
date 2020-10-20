import { types } from '../types/types';

/*
    {
        products: Array<Product>,
        active: Product
    }
*/
const initialState = {
    products: [],
    active: null
}

export const productsReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.productsLoad:
            return { // Devuelves una COPIA MODIFICADA del state, no modificas el state directamente
                ...state,
                products: [ ...action.payload ] // Devuelves una COPIA del array, no el array original
            }

        default:
            return state;

    }

}