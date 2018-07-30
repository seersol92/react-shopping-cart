import Products from './../meta/products.json';

/**
 * Mock an asynchronous fetch of todos from the JSON
 * @return {Promise}
 */
export function fetchProducts() {
  return new Promise(resolve => {
    return setTimeout(() => {
      return resolve(Products);
    }, Math.floor(Math.random() * (1000 - 300))) + 300;
  });
}
