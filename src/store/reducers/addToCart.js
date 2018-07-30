import * as actionTypes from './../actions/actionTypes';
import {  updateObject } from '../utility';

const initialState = {
    error: null,
    product: [],
    loading: false,
    message:null
};

const initializingCart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const productAdded = (state, action) => {
    return updateObject(state, {
        products: action.data,
        error: null,
        loading: false
    });
}

const addToCartProcessFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: true
    });
}



const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIALIZE_ADD_PRODUCT_TO_CART:
            return initializingCart(state, action);
        case actionTypes.PRODUCT_ADDED_IN_CART:
            return productAdded(state, action);
        case actionTypes.FAILED_TO_ADD_PRODUCT_IN_CART:
            return addToCartProcessFailed(state, action);
        /* case actionTypes.QUANTITY_INCREMENT:
            return onQuantityIncrement(state, action);
        case actionTypes.QUANTITY_DECREMENT:
            return onQuantityDecrement(state, action); */
        default:
            return state;
    }
};

export default productReducer;