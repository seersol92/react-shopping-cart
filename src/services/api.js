import Products from './../meta/products.json';

/**
 * Mock an asynchronous fetch of product from the JSON
 * @return {Promise}
 */
export const fetchProducts = () => {
  return new Promise(resolve => {
    return setTimeout(() => {
      return resolve(Products);
    }, Math.floor(Math.random() * (1000 - 300))) + 300;
  });
}


export const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    const product = Products.find( item => item.id === id );
    if (product)
        return resolve(product);
    else 
        return reject('Product Not Found!!')
  })
}
