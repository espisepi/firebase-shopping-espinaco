import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLoadingProducts } from '../actions/products';
import { addToCart } from '../actions/cart';


export const AppRouter = () => {

    /* LOAD PRODUCTS */
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startLoadingProducts());
      },[]);

    /* GET PRODUCTS */
    const { products, active } = useSelector( state => state.products );

    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId, 1));
    }

    return (
        <div>

            {products.map( product => {
                return (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <h4>Price: {product.price}</h4>
                        <button onClick={() => handleAddToCart(product.id)}></button>
                    </div>
                );
            })}

        </div>
    );
    
}