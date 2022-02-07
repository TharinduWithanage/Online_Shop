import { ActionTypes } from "../contants/action-types"

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectProduct = (products) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload: products,
    };
};

export const removeSelectProduct = (products) => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};