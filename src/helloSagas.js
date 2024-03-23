import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_ERROR,
  FETCH_SAGA_PRODUCT,
  FETCH_SAGA_PRODUCT_SUCCESS,
  FETCH_CLASS_DATA_ERROR,
} from "./constants";

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, "https://fakestoreapi.com/products");
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_ERROR, payload: error.message });
  }
}

function* fetchProductDetailsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://fakestoreapi.com/products/${action.payload}`
    );
    yield put({
      type: FETCH_PRODUCT_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_PRODUCT_DETAILS_ERROR,
      payload: error.message,
    });
  }
}

/**/ /****************************** */

//sagaa class component
function* fetchDataSagaClass() {
  try {
    const response = yield call(axios.get, "http://localhost:3000/1");
    yield put({ type: FETCH_SAGA_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_CLASS_DATA_ERROR, payload: error.message });
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}

export function* watchFetchProductDetails() {
  yield takeLatest(FETCH_PRODUCT_DETAILS, fetchProductDetailsSaga);
}

export function* watchSagaFetchData() {
  yield takeLatest(FETCH_SAGA_PRODUCT, fetchDataSagaClass);
}
