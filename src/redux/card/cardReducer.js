import * as types from './cardActionsTypes';

const initialState = {
  cardList: [

  ],
  byu: false
}

export default function reducer( state = initialState, action) {
  switch (action.type){
    case types.ADD_TO_CARD: {
      return {
        ...state,
        cardList: [...state.cardList, action.payload]
      }
    }
    case types.DELETE_FROM_ITEM: {
      const newArr = state.cardList.filter(item => item.id !== action.payload)
      return {
        ...state, cardList: [...state.cardList, { [action.payload]:  newArr}]
      }
    }
    case types.BUY_PRODUCTS_FROM_CARD: {
      return{
        ...state, 
        cardList: state.cardList.initialState,
        byu: true
      }
    }
    default: 
      return state
  }
}