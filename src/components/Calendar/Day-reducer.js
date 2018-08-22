import {
  DAY_SELECTED
} from './Day-actions';

/**
 * Profile from reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export const dayReducer = (state = {}, action) => {
  switch (action.type) {
  case DAY_SELECTED:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};

