import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './productsActionsTypes';
import {getAllProductsSuccessAction, getCategorySuc} from './productsActions'
import {getAllProduct} from '../../libs/products'

export function* getAllBooksSaga() {
    const data = yield call(getAllProduct)
   
    yield put(getAllProductsSuccessAction(data))
}

export function*  getBooksByCategory(action) {
    const data = yield call(getAllProduct, {...action.payload})

    yield put(getCategorySuc(data))
}

export default function* watchBooks() {
    yield takeLatest(types.GET_PRODUCTS_ALL_REQUEST, getAllBooksSaga);
    yield takeLatest(types.GET_CATEGORY, getBooksByCategory);
}