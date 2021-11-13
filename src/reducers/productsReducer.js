import { ADD_PRODUCT, LOAD_PRODUCTS, SUCCESS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_PRODUCTS}_${SUCCESS}`:
      return payload;

    case `${ADD_PRODUCT}_${SUCCESS}`:
      return [...state, payload];

    default:
      return state;
  }
};
