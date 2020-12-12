import {combineReducers} from "redux";
import product from './products/productsReducer'
import wanted from './wanted/wantedsReducer'
import card from './card/cardReducer'

const rootReducer = combineReducers({
    product,
    wanted,
    card
})

export default rootReducer