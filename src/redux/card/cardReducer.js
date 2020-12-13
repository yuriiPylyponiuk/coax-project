import * as types from './cardActionsTypes';
import _ from 'lodash';

const initialState = {
  cardList: [],
  buy: false, 
  totalPrice: 0,
  show: false,
}

export default function reducer( state = initialState, action) {
  switch (action.type){
    case types.ADD_TO_CARD: {
      return {
        ...state,
        cardList: [...state.cardList, action.payload],
        buy: false,
      }
    }
    case types.DELETE_FROM_ITEM: {
      let index = state.cardList.indexOf(action.payload);
      let arr = state.cardList.slice(0);
       arr.splice(index, 1)

      return {
        ...state,  
        cardList:  arr
      }
    }
    case types.BUY_PRODUCTS_FROM_CARD: {
      return{
        ...state, 
        cardList: [],
        buy: true,
        totalPrice: action.payload

      }
    }
    case types.SHOW_CARD_LIST_ELEMS: {
      return{
        ...state,
        show: true
      }
    }
    case types.DELETE_FROM_ITEM_LIST: {
      const newArr = state.cardList.filter(item => item.id !== action.payload)
      return {
          ...state, cardList: newArr
      }
    }
    default: 
      return state
  }
}