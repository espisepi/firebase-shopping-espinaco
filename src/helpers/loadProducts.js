import { db } from '../firebase/firebase-config';

export const loadProducts = async () => {
    const productsSnap = await db.collection(`products/`).get();
    const products = [];

    productsSnap.forEach( snapHijo => {
      products.push({
        id: snapHijo.id,
        ...snapHijo.data()
      })
    });

    return products;
} 