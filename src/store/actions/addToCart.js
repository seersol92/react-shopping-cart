import * as actionTypes from './actionTypes'
import { fetchProduct } from './../../services/api'


export const   initializeCart = () => {
    return {
        type: actionTypes.INITIALIZE_ADD_PRODUCT_TO_CART
    }
}

export const productAddedToCart = (data) => {
    return {
        type: actionTypes.PRODUCT_ADDED_IN_CART,
        cart: data
    }
}

export const addToCartFailed = (error) => {
    return {
        type: actionTypes.FAILED_TO_ADD_PRODUCT_IN_CART,
        error: error
    }
}


export const addToCart = (id) => {
    return async dispatch => {
        dispatch(initializeCart())
        try {

            const product =await fetchProduct(id);
            dispatch(productAddedToCart(product))
            console.log(product);

        } catch(err) {

            dispatch(addToCartFailed(err))
            console.log(err)
            return Promise.reject();
        }
    }
}