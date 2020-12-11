import * as types from './productsActionsTypes'

export function getAllProductsSuccessAction(payload){
    return {type: types.GET_PRODUCTS_ALL_SUCCESS, payload}
}

export function getAllProductsRequestAction(){
    return {type: types.GET_PRODUCTS_ALL_REQUEST}
}
export function getCategory(payload){
    return {type: types.GET_CATEGORY, payload}
}