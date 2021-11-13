import { combineReducers } from 'redux';
import cart from './cartReducer';
import products from './productsReducer';
import loading from './loadingReducer';
import error from './errorReducer';

export default combineReducers({
  cart,
  products,
  loading,
  error,
});
