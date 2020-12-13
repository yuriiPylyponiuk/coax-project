import * as types from './cardActionsTypes';

export function deleteItemFromCard(payload){
  return{ type: types.DELETE_FROM_ITEM, payload}
}

export function showModal(){
  return{ type: types.BUY_PRODUCTS_FROM_CARD}
}

export function addToCard(payload){
  return {type: types.ADD_TO_CARD, payload}
}
export function showCardElems(){
  return {type: types.SHOW_CARD_LIST_ELEMS}
}
export function buyAll(payload){
  return {type: types.BUY_PRODUCTS_FROM_CARD, payload}
}


export function deleteAllItemsFromList(payload){
  return{ type: types.DELETE_FROM_ITEM_LIST, payload}
}