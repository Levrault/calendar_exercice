import {
  YEAR_FORM_SUBMIT
} from './YearForm-actions';

/**
 * Profile from reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export const yearFormReducer = (state = {}, action) => {
  switch (action.type) {
  case YEAR_FORM_SUBMIT:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
