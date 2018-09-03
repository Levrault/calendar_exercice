
import axios from 'axios';

export const EVENTFORM_SUBMIT_BEGIN = 'EVENTFORM_SUBMIT_BEGIN';
export const EVENTFORM_SUBMIT_SUCCESS = 'EVENTFORM_SUBMIT_SUCCESS';
export const EVENTFORM_SUBMIT_FAILURE = 'EVENTFORM_SUBMIT_FAILURE';
export const EVENTFORM_RESET = 'EVENTFORM_RESET';
export const EVENTFORM_COLOR_CHANGE = 'EVENTFORM_COLOR_CHANGE';

/**
 * Begin to fetch data
 * @returns {object}
 */
export const eventFormSubmitBegin = () => ({
  type: EVENTFORM_SUBMIT_BEGIN
});

/**
 * Calendar data has been returned
 * @param {array} current
 * @returns {object}
 */
export const eventFormSubmitSuccess = () => ({
  type: EVENTFORM_SUBMIT_SUCCESS
});

/**
 * Receive an error
 * @param {object} error
 * @returns {object}
 */
export const eventFormSubmitError = error => ({
  type: EVENTFORM_SUBMIT_FAILURE,
  payload: { error }
});

/**
 * Update color
 * @param {string} color
 */
export const colorChange = (color) => ({
  type: EVENTFORM_COLOR_CHANGE,
  payload: { color }
});

/**
 * Reset all store data for Event
 * @returns {object}
 */
export const eventFormReset = () => ({
  type: EVENTFORM_RESET
});

/**
 *  Get a specefic year with all his data
 * @param {string} params
 */
export const submit = (params) => async (dispatch) => {
  dispatch(eventFormSubmitBegin());
  try {
    const response = await axios.post(`${BASE_URL}events`, {
      ...params
    });
    dispatch(eventFormSubmitSuccess(response.data));
  } catch (error) {
    dispatch(eventFormSubmitError(error.response.data.errors));
  }
};
