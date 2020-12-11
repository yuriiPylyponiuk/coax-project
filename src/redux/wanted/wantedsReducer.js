import * as types from './wantedsActionsTypes'

const initialState = {
    error: false,
    wantedList: {
        data: []
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_WANTED_LIST: {
            return {
                ...state,
                 wantedList: {
                     data: action.payload
                 }
            }
        }
        case types.DEL_FROM_WANTED_LIST: {
            const itemIndex = state.wantedList.findIndex((item) => action.payload.id === item.id)
            return {
                ...state, wantedList: [...state.wantedList.slice(0, itemIndex), ...state.wantedList.slice(itemIndex + 1)]
            }
        }
        default:
            return state
    }
}