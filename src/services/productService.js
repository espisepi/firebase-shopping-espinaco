import { db } from '../firebase/firebase-config';

export const findAll = async () => {
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

export const findById = async (productId) => {
  const productSnap = await db.doc(`products/${productId}`).get();
  const data = productSnap.data();
  return {
    id: productId,
    ...data
  };
}