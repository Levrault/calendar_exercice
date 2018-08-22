import {
  EVENT_FORM_OPEN
} from './EventForm-actions';

/**
 * Profile from reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export const eventFormReducer = (state = {}, action) => {
  switch (action.type) {
  case EVENT_FORM_OPEN:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};

