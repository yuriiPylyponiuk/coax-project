import * as types from './productsActionsTypes';

const initialState = {
	products: {
		data: [],
		loaded: true,
		error: false,
    show: false,
    category: false
  },
  findingData: '',
  numberOfElem: 20,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
		case types.GET_PRODUCTS_ALL_REQUEST:
      return{
        ...state,
        products: {
          data: false,
          loaded: true,
          error: false,
          show: false
        }
      }
    case types.GET_PRODUCTS_ALL_SUCCESS:
      return{
        ...state,
        products: {
          data: action.payload,
          loaded: false,
          error: false,
          show: true
        }
      }
    case types.GET_POST_BY_ERROR:
      return{
        ...state,
        products: {
          data: false,
          loaded: false,
          error: action.payload,
          show: false
        }
      }
    case types.GET_CATEGORY:
      return{
        ...state,
        products: {
          data: state.products.data,
          loaded: false,
          error: false,
          show: false,
          category: action.payload
        }
      }
    
    case types.MORE_ELEMS:
      //let num = state.numberOfElem + 20;
      return{
        ...state, 
        numberOfElem: action.payload
      }
    
	  default: 
			return state;
	}
}