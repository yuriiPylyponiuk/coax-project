import * as types from './wantedsActionsTypes'

export function delFromWantedList(payload) {
    return {type: types.DELETE_FROM_WANTED_LIST, payload}
}

export function addToWantedList(payload) {
    return {type: types.ADD_TO_WANTED_LIST, payload}
}
export function searchItemInWanted(payload) {
    return {type: types.SEARCH_IN_WANTED_LIST, payload}
}