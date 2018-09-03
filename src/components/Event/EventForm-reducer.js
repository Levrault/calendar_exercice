import {
  EVENTFORM_SUBMIT_BEGIN,
  EVENTFORM_SUBMIT_SUCCESS,
  EVENTFORM_SUBMIT_FAILURE,
  EVENTFORM_COLOR_CHANGE
} from './EventForm-actions';

const initialState = {
  success: false,
  loading: false,
  error: null
};

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
      color: action.payload.color
    };

  default:
    return state;
  }
};
