import * as actionTypes from './../actions/actionTypes';
import {  updateObject } from '../utility';

const initialState = {
    error: null,
    products: [],
    loading: false,
    message:null
};

const startFetchingProduct = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const productsFetched = (state, action) => {
    return updateObject(state, {
        products: action.data,
        error: null,
        loading: false
    });
}

const failedFetchingProduct = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: true
    });
}

const onQuantityIncrement = (state, action) => {

    let newState;
    const index = action.product_index;
    const products = state.products.slice();
    let product = products[index];
    if (product) {
        let selectedQuantity = product.selectedQty
        if (selectedQuantity < product.qty) {
            product.selectedQty += 1;
            newState = {
                products: products
            }
        } else {
            newState = {
                error: 'Product is out of stock'
            }
        }
    } else {

        newState = {
            error: 'Product Not Found!!'
        }
    }

    return updateObject(state, newState);
}

const onQuantityDecrement = (state, action) => {

    let newState;
    const index = action.product_index;
    const products = state.products.slice();
    let product = products[index];
    if (product) {
        let selectedQuantity = product.selectedQty
        if (selectedQuantity > 1) {
            product.selectedQty -= 1;
            newState = {
                products: products
            }
        } else {
            newState = {
                error: 'You can not decrement quantity!!'
            }
        }
    } else {
        
        newState = {
            error: 'Product Not Found!!'
        }
    }

    return updateObject(state, newState);
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_FETCHING_START:
            return startFetchingProduct(state, action);
        case actionTypes.PRODUCT_FETCHED_DONE:
            return productsFetched(state, action);
        case actionTypes.PRODUCT_FETCHING_FAILED:
            return failedFetchingProduct(state, action);
        case actionTypes.QUANTITY_INCREMENT:
            return onQuantityIncrement(state, action);
        case actionTypes.QUANTITY_DECREMENT:
            return onQuantityDecrement(state, action);
        default:
            return state;
    }
};

export default productReducer;