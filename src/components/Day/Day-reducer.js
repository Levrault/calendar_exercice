import {
  DAY_SELECTED
} from './Day-actions';

const initialState = {
  selected: ''
};

/**
 * Day reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export const dayReducer = (state = initialState, action) => {
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

