import { FAIL } from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  const match = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (!match) return state;

  const [, process, processType] = match;
  if (processType === FAIL) {
    return { ...state, [process]: payload };
  }
  const { [process]: x, ...rest } = state;
  return rest;
};
