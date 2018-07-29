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

export const updateQty = (products) => {
    return {
        type: actionTypes.QUANTITY_UPDATED,
        data: products
    }
}

export const quantityIncrement = (index) => {
    return dispatch => {
        dispatch({
            type: actionTypes.QUANTITY_UPDATE_START
        });

        let NewProducts = Products.slice();
       
        let product = NewProducts[index];
        if (product) {
            let selectedQuantity = product.selectedQty
           if (selectedQuantity < product.qty) {
            NewProducts[index].selectedQty +=1;
            dispatch(updateQty(NewProducts)); 
           }   else {
            dispatch({
                type: actionTypes.QUANTITY_UPDATE_FAILED,
                error: 'Product is out of stock'
            });
           }      
        } else {
            dispatch({
                type: actionTypes.PRODUCT_FETCHING_FAILED,
                error: 'Product Not Found!!'
            });
        }
    }
}

export const quantityDecrement = (index) => {
    return dispatch => {
        dispatch({
            type: actionTypes.QUANTITY_UPDATE_START
        });

        let NewProducts = Products.slice();
       
        let product = NewProducts[index];
        if (product) {
            let selectedQuantity = product.selectedQty
           if (selectedQuantity > 1) {
            NewProducts[index].selectedQty -=1;
            dispatch(updateQty(NewProducts)); 
           }   else {
            dispatch({
                type: actionTypes.QUANTITY_UPDATE_FAILED,
                error: 'You can not decrement quantity!!'
            });
           }      
        } else {
            dispatch({
                type: actionTypes.PRODUCT_FETCHING_FAILED,
                error: 'Product Not Found!!'
            });
        }
    }
}