import { types } from '../types/types';

/*
    {
        cartItems: Array<Product>,
    }
*/
const initialState = {
    cartItems: []
}

export const cartReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.cartAddItem:
            const item = action.payload; // item = {...product, quantity}

            const product = state.cartItems.find(x => x === item);
            if(product) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x === product ? item : x)
                };
            }
            return { // Devuelves una COPIA MODIFICADA del state, no modificas el state directamente
                ...state,
                cartItems: [ ...state.cartItems, item ] // Devuelves una COPIA del array, no el array original
            };

        default:
            return state;

    }

}