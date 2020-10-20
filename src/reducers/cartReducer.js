import { types } from '../types/types';

/*
    {
        cartProducts: Array<Product>,
    }
*/
const initialState = {
    cartProducts: []
}

export const cartReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.cartAddProduct:
            const product = action.payload; // item = {...product, quantity}
            // Si el producto existe en el carrito lo elimino para sustituirlo por el nuevo
            const newCartProducts = state.cartProducts.filter( alreadyInCart => alreadyInCart.id !== product.id );
            newCartProducts.push(product);

            return { // Devuelve una COPIA MODIFICADA del state, no modificas el state directamente
                ...state,
                cartProducts: newCartProducts // Devuelve una COPIA del array, no el array original
            };

        default:
            return state;

    }

}