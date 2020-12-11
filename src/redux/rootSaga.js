import {all, fork} from "redux-saga/effects"
import watchBooks from "./products/productsSaga";

export default function* rootSaga() {
    yield all([
        watchBooks(),
    ]);
}