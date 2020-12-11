import * as types from './wantedsActionsTypes'
export function delFromWantedList(payload) {
    return {type: types.DEL_FROM_WANTED_LIST, payload}
}

export function addToWantedList(payload) {
    return {type: types.ADD_TO_WANTED_LIST, payload}
}
