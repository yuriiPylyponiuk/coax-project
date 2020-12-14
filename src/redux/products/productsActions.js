import * as types from './productsActionsTypes'

export function getAllProductsSuccessAction(payload){
    return {type: types.GET_PRODUCTS_ALL_SUCCESS, payload}
}

export function getAllProductsRequestAction(){
    return {type: types.GET_PRODUCTS_ALL_REQUEST}
}
export function getMoreElems(payload){
    return {type: types.MORE_ELEMS, payload}
}
export function getCategory(payload){
    return {type: types.GET_CATEGORY, payload}
}
export function getCategorySuc(payload){
    return {type: types.GET_CATEGORY_SUC, payload}
}

export function fiterProductList(payload){
    return {type: types.FILTER_PRODUCTS, payload}
}
export function searchInList(payload){
    return {type: types.SEARCH_IN_LIST, payload}
}
