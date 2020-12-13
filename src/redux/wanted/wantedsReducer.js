import * as types from './wantedsActionsTypes'

const initialState = {
    wanted: [],
    error: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_WANTED_LIST: {
            return {
                ...state,
                 wanted: [...state.wanted, action.payload]
            }
        }
        case types.DELETE_FROM_WANTED_LIST: {
            const newArr = state.wanted.filter(item => item.id !== action.payload)
            return {
                ...state, wanted: newArr
            }
        }
        default:
            return state
    }
}