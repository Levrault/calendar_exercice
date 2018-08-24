import {
  CALENDAR_FETCH_BEGIN,
  CALENDAR_FETCH_SUCCESS,
  CALENDAR_FETCH_FAILURE
} from './Calendar-actions';

const initialState = {
  months: [],
  loading: false,
  error: null
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
  case CALENDAR_FETCH_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };

  case CALENDAR_FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      ...action.payload
    };

  case CALENDAR_FETCH_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      calendar: []
    };

  default:
    return state;
  }
};
