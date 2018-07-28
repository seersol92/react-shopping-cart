import * as actionTypes from './actionTypes'
import Products from './../../meta/products'

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
    return dispatch => {
        dispatch(productFetchingStart());
        if (Products) {
            dispatch(productFetched(Products));            
        } else {
            dispatch(productFetchingFailed('Unable to fetch products!!'));
        }
    }
}