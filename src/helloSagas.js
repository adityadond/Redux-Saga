import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./constants";

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, "https://fakestoreapi.com/products");
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_ERROR, payload: error.message });
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
