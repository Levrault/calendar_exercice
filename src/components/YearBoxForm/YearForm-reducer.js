import {
  YEAR_FORM_SUBMIT
} from './YearForm-actions';

const initialState = {
  year: 2018
};

/**
 * Profile from reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export const yearFormReducer = (state = initialState, action) => {
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
