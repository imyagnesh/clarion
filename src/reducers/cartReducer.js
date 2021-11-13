import {
  ADD_ITEM,
  DELETE_ITEM,
  LOAD_CART,
  SUCCESS,
  UPDATE_ITEM,
} from '../constants/actionTypes';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const totalPrice = data => data.reduce((p, c) => p + c.price * c.quantity, 0);
const totalItems = data => data.reduce((p, c) => p + c.quantity, 0);

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_CART}_${SUCCESS}`:
      return {
        ...state,
        cartItems: payload,
        totalPrice: totalPrice(payload),
        totalItems: totalItems(payload),
      };

    case `${ADD_ITEM}_${SUCCESS}`: {
      const cartItems = [...state.cartItems, payload];
      return {
        ...state,
        totalPrice: totalPrice(cartItems),
        totalItems: totalItems(cartItems),
      };
    }

    case `${UPDATE_ITEM}_${SUCCESS}`: {
      const index = state.cartItems.findIndex(x => x.id === payload.id);

      const cartItems = [
        ...state.cartItems.slice(0, index),
        payload,
        ...state.cartItems.slice(index + 1),
      ];

      return {
        ...state,
        cartItems,
        totalPrice: totalPrice(cartItems),
        totalItems: totalItems(cartItems),
      };
    }

    case `${DELETE_ITEM}_${SUCCESS}`: {
      const index = state.cartItems.findIndex(x => x.id === payload);

      const cartItems = [
        ...state.cartItems.slice(0, index),
        ...state.cartItems.slice(index + 1),
      ];

      return {
        ...state,
        cartItems,
        totalPrice: totalPrice(cartItems),
        totalItems: totalItems(cartItems),
      };
    }

    default:
      return state;
  }
};
