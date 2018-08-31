import {
  YEAR_FETCH_ALL_BEGIN,
  YEAR_FETCH_ALL_SUCCESS,
  YEAR_FETCH_ALL_FAILURE,
  YEAR_FETCH_BEGIN,
  YEAR_FETCH_SUCCESS,
  YEAR_FETCH_FAILURE
} from './YearForm-actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  current: {},
  min: 2018,
  max: 2025
};

export const yearFormReducer = (state = initialState, action) => {
  switch (action.type) {
  case YEAR_FETCH_ALL_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };

  case YEAR_FETCH_ALL_SUCCESS:
    return {
      ...state,
      loading: false,
      ...action.payload
    };

  case YEAR_FETCH_ALL_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      data: []
    };
  case YEAR_FETCH_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };

  case YEAR_FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      ...action.payload
    };

  case YEAR_FETCH_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };

  default:
    return state;
  }
};
