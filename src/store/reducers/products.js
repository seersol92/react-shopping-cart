import * as actionTypes from './../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: null,
    products: [],
    loading: false
};

const startFetchingProduct = (state, action) => {
    return updateObject( state, { error: null, loading: true } );
}

const productsFetched = (state, action) => {
    return updateObject( state, { products: action.data ,error: null, loading: false } );
}

const failedFetchingProduct = (state, action) => {
    return updateObject( state, { error: action.error, loading: true } );    
}

const updated = (state, action) => {
    return updateObject( state,  { products: action.data ,error: action.error, loading: false } );
}

const productReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PRODUCT_FETCHING_START: return startFetchingProduct(state, action);
        case actionTypes.PRODUCT_FETCHED_DONE: return productsFetched(state, action);
        case actionTypes.PRODUCT_FETCHING_FAILED: return failedFetchingProduct(state, action);
        case actionTypes.QUANTITY_UPDATED: return updated(state, action);
        default:
            return state;
    }
};

export default productReducer;