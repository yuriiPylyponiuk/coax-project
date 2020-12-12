import * as types from './cardActionsTypes';

export function deleteItemFromCard(payload){
  return{ type: types.BUY_PRODUCTS_FROM_CARD, payload}
}

export function showModal(){
  return{ type: types.BUY_PRODUCTS_FROM_CARD}
}

export function addToCard(payload){
  return {type: types.ADD_TO_CARD, payload}
}