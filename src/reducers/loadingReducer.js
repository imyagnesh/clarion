import { REQUEST } from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!match) return state;

  const [, process, processType] = match;
  if (processType === REQUEST) {
    return { ...state, [process]: payload?.id || true };
  }
  const { [process]: x, ...rest } = state;
  return rest;
};
