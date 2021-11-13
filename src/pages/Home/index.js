import { connect } from 'react-redux';
import {
  ADD_ITEM,
  DELETE_ITEM,
  LOAD_CART,
  LOAD_PRODUCTS,
  REQUEST,
  UPDATE_ITEM,
} from '../../constants/actionTypes';
import Home from './Home';

const mapStateToProps = store => ({
  products: store.products,
  cart: store.cart,
  isProductsLoading: store.loading[LOAD_PRODUCTS],
  isCartLoading: store.loading[LOAD_CART],
  isAddToCartLoading: store.loading[ADD_ITEM],
  isUpdateToCartLoading: store.loading[UPDATE_ITEM],
  isDeleteToCartLoading: store.loading[DELETE_ITEM],
  hasProductsError: store.error[LOAD_PRODUCTS],
  hasCartError: store.error[LOAD_CART],
  hasAddToCartError: store.error[ADD_ITEM],
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch({ type: `${LOAD_PRODUCTS}_${REQUEST}` }),
  loadCart: () => dispatch({ type: `${LOAD_CART}_${REQUEST}` }),
  addToCart: (item, type) =>
    dispatch({ type: `${type}_${REQUEST}`, payload: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
