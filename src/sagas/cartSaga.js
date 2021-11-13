import {
  all,
  call,
  fork,
  put,
  takeLatest,
  select,
} from '@redux-saga/core/effects';
import {
  ADD_ITEM,
  DELETE_ITEM,
  FAIL,
  LOAD_CART,
  REQUEST,
  SUCCESS,
  UPDATE_ITEM,
} from '../constants/actionTypes';
import axiosInstance from '../utils';

const cartItems = state => state?.cart?.cartItems;

function* addToCart({ payload }) {
  let actionType = ADD_ITEM;
  let payloadData = null;
  try {
    const cart = yield select(cartItems);
    const cartItem = cart.find(x => x.id === payload.id);
    if (cartItem) {
      if (payload.quantity <= 0) {
        // delete Item from cart
        yield call(axiosInstance.delete, `660/cart/${payload.id}`);
        actionType = DELETE_ITEM;
        payloadData = payload.id;
      } else {
        // Update Quantity
        const res = yield call(
          axiosInstance.put,
          `660/cart/${payload.id}`,
          payload,
        );
        actionType = UPDATE_ITEM;
        payloadData = res.data;
      }
    } else {
      const res = yield call(axiosInstance.post, '660/cart', payload);
      payloadData = res.data;
    }

    yield put({ type: `${actionType}_${SUCCESS}`, payload: payloadData });
  } catch (error) {
    yield put({ type: `${actionType}_${FAIL}`, payload: error });
  }
}

function* loadCart() {
  try {
    const res = yield call(axiosInstance.get, '660/cart');
    yield put({ type: `${LOAD_CART}_${SUCCESS}`, payload: res.data });
  } catch (error) {
    yield put({ type: `${LOAD_CART}_${FAIL}`, payload: error });
  }
}

function* addToCartRequest() {
  yield takeLatest(`${ADD_ITEM}_${REQUEST}`, addToCart);
}

function* UpdateToCartRequest() {
  yield takeLatest(`${UPDATE_ITEM}_${REQUEST}`, addToCart);
}

function* DeleteToCartRequest() {
  yield takeLatest(`${DELETE_ITEM}_${REQUEST}`, addToCart);
}

function* loadCartRequest() {
  yield takeLatest(`${LOAD_CART}_${REQUEST}`, loadCart);
}

export default function* rootCart() {
  yield all([
    fork(addToCartRequest),
    fork(loadCartRequest),
    fork(UpdateToCartRequest),
    fork(DeleteToCartRequest),
  ]);
}
