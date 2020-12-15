import * as types from './wantedsActionsTypes'

const initialState = {
    wanted: [],
    error: false,
    reset: [],
    numberOfElem: 12,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_WANTED_LIST: {
            return {
                ...state,
                 wanted: [...state.wanted, action.payload],
                 reset: [...state.reset, action.payload],
            }
        }
        case types.DELETE_FROM_WANTED_LIST: {
            const newArr = state.wanted.filter(item => item.id !== action.payload)
            return {
                ...state, 
                wanted: newArr,
                reset: newArr,
            }
        }
        case types.SEARCH_IN_WANTED_LIST: {
            return {
                ...state, 
                wanted: action.payload,
                error: false
            }
        }
        default:
            return state
    }
}