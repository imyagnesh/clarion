import {
  all,
  delay,
  fork,
  takeLatest,
  call,
  put,
} from '@redux-saga/core/effects';
import {
  FAIL,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
} from '../constants/actionTypes';
import axiosInstance from '../utils';

// function* addProductRequest() {}

function* loadProducts() {
  try {
    const res = yield call(axiosInstance.get, '660/products');
    yield put({ type: `${LOAD_PRODUCTS}_${SUCCESS}`, payload: res.data });
  } catch (error) {
    yield put({ type: `${LOAD_PRODUCTS}_${FAIL}`, payload: error });
  }
}

function* loadProductsRequest() {
  yield takeLatest(`${LOAD_PRODUCTS}_${REQUEST}`, loadProducts);
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest)]);
}
