import * as actionTypes from './actionTypes'
import { fetchProducts } from './../../services/api'

export const startFetchingProduct = () => {
    return {
        type: actionTypes.PRODUCT_FETCHING_START
    }
}

export const productFetchingStart = () => {
    return {
        type: actionTypes.PRODUCT_FETCHING_START
    }
}

export const productFetched = (products) => {
    return {
        type: actionTypes.PRODUCT_FETCHED_DONE,
        data: products
    }
}

export const productFetchingFailed = (error) => {
    return {
        type: actionTypes.PRODUCT_FETCHING_FAILED,
        error: error
    }
}


export const fetchProduct = () => {
    return async dispatch => {
        try {
            // call the API
            const products = await fetchProducts();
            // dispatch a success action if it works
            dispatch(productFetched(products));
        } catch (err) {
            // dispatch a fail action if API call fails
            dispatch(productFetchingFailed('Unable to fetch products!!'));
            // reject the promise
            return Promise.reject();
        }
    }
}

export const quantityIncrement = (index) => {

    return {
        type: actionTypes.QUANTITY_INCREMENT,
        product_index: index
    }
}

export const quantityDecrement = (index) => {

    return {
        type: actionTypes.QUANTITY_DECREMENT,
        product_index: index
    }
}