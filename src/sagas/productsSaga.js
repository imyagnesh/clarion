import {
  all,
  delay,
  fork,
  takeLatest,
  call,
  put,
} from '@redux-saga/core/effects';
import {
  ADD_PRODUCT,
  FAIL,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
} from '../constants/actionTypes';
import axiosInstance from '../utils';
// import { his } from 'react-router-dom'

// function* addProductRequest() {}

function* loadProducts() {
  try {
    const res = yield call(axiosInstance.get, '660/products');
    yield put({ type: `${LOAD_PRODUCTS}_${SUCCESS}`, payload: res.data });
    // yield call(window.history.pushState, {}, undefined, '/home');
  } catch (error) {
    yield put({ type: `${LOAD_PRODUCTS}_${FAIL}`, payload: error });
  }
}

function* addProduct({ payload, actions }) {
  try {
    const res = yield call(axiosInstance.post, '660/products', payload);
    yield put({ type: `${ADD_PRODUCT}_${SUCCESS}`, payload: res.data });
    actions.resetForm();
    // Redirect to Home page
  } catch (error) {
    actions.setErrors({
      serverError: error.message,
    });
    yield put({ type: `${ADD_PRODUCT}_${FAIL}`, payload: error });
  }
}

function* loadProductsRequest() {
  yield takeLatest(`${LOAD_PRODUCTS}_${REQUEST}`, loadProducts);
}

function* addProductsRequest() {
  yield takeLatest(`${ADD_PRODUCT}_${REQUEST}`, addProduct);
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest), fork(addProductsRequest)]);
}
