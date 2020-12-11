import {combineReducers} from "redux";
import product from './products/productsReducer'
import wanted from './wanted/wantedsReducer'

const rootReducer = combineReducers({
    product,
    wanted
})

export default rootReducer