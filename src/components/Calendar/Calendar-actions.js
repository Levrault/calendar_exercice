import axios from 'axios';

export const CALENDAR_FETCH_BEGIN = 'CALENDAR_FETCH_BEGIN';
export const CALENDAR_FETCH_SUCCESS = 'CALENDAR_FETCH_SUCCESS';
export const CALENDAR_FETCH_FAILURE = 'CALENDAR_FETCH_FAILURE';

/**
 * Begin to fetch data
 * @returns {object}
 */
export const calendarFetchBegin = () => ({
  type: CALENDAR_FETCH_BEGIN
});

/**
 * Calendar data has been returned
 * @param {array} months
 * @returns {object}
 */
export const calendarFetchSuccess = months => ({
  type: CALENDAR_FETCH_SUCCESS,
  payload: {
    months
  }
});

/**
 * Receive an error
 * @param {object} error
 * @returns {object}
 */
export const calendarFetchError = error => ({
  type: CALENDAR_FETCH_FAILURE,
  payload: { error }
});

export const fetch = (params) => async (dispatch) => {
  dispatch(calendarFetchBegin());
  try {
    const response = await axios.get(`${BASE_URL}calendar`, {
      params
    });
    dispatch(calendarFetchSuccess(response.data[0].agenda));
  } catch (error) {
    dispatch(calendarFetchError(error));
  }
};
