import { colors, fontColors } from '../Palette/colors-constant';

import {
  EVENTFORM_SUBMIT_BEGIN,
  EVENTFORM_SUBMIT_SUCCESS,
  EVENTFORM_SUBMIT_FAILURE,
  EVENTFORM_COLOR_CHANGE,
  EVENTFORM_RESET
} from './EventForm-actions';

const initialState = {
  success: false,
  loading: false,
  error: null,
  color: colors[colors.length - 1].code,
  font: fontColors.dark,
  name: '',
  monthId: '',
  day: 0
};

/**
 * Event form reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export const eventFormReducer = (state = initialState, action) => {
  switch (action.type) {
  case EVENTFORM_SUBMIT_BEGIN:
    return {
      ...state,
      loading: true,
      success: false,
      error: null
    };

  case EVENTFORM_SUBMIT_SUCCESS:
    return {
      ...state,
      loading: false,
      success: true,
      error: null
    };

  case EVENTFORM_SUBMIT_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };

  case EVENTFORM_COLOR_CHANGE:
    return {
      ...state,
      ...action.payload
    };

  case EVENTFORM_RESET:
    return {
      ...state,
      ...initialState
    };

  default:
    return state;
  }
};
