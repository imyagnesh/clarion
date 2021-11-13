import { connect } from 'react-redux';
import {
  ADD_ITEM,
  DELETE_ITEM,
  LOAD_CART,
  REQUEST,
  UPDATE_ITEM,
} from '../../constants/actionTypes';
import Cart from './Cart';

const mapStateToProps = store => ({
  cart: store.cart,
  isCartLoading: store.loading[LOAD_CART],
  isAddToCartLoading: store.loading[ADD_ITEM],
  isUpdateToCartLoading: store.loading[UPDATE_ITEM],
  isDeleteToCartLoading: store.loading[DELETE_ITEM],
  hasCartError: store.error[LOAD_CART],
  hasAddToCartError: store.error[ADD_ITEM],
});

const mapDispatchToProps = dispatch => ({
  loadCart: () => dispatch({ type: `${LOAD_CART}_${REQUEST}` }),
  addToCart: (item, type) =>
    dispatch({ type: `${type}_${REQUEST}`, payload: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
