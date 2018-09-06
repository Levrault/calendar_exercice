import axios from 'axios';
import { eventCreated, eventDeleted } from './Events-actions';

export const EVENTFORM_SUBMIT_BEGIN = 'EVENTFORM_SUBMIT_BEGIN';
export const EVENTFORM_SUBMIT_SUCCESS = 'EVENTFORM_SUBMIT_SUCCESS';
export const EVENTFORM_SUBMIT_FAILURE = 'EVENTFORM_SUBMIT_FAILURE';
export const EVENTFORM_DELETE_BEGIN = 'EVENTFORM_DELETE_BEGIN';
export const EVENTFORM_DELETE_SUCCESS = 'EVENTFORM_DELETE_SUCCESS';
export const EVENTFORM_DELETE_FAILURE = 'EVENTFORM_DELETE_FAILURE';
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
 * Begin to delete an event
 * @returns {object}
 */
export const eventFormDeleteBegin = () => ({
  type: EVENTFORM_DELETE_BEGIN
});

/**
 * Event has been deleted
 * @param {array} current
 * @returns {object}
 */
export const eventFormDeleteSuccess = () => ({
  type: EVENTFORM_DELETE_SUCCESS
});

/**
 * Receive an error
 * @param {object} error
 * @returns {object}
 */
export const eventFormDeleteError = error => ({
  type: EVENTFORM_DELETE_FAILURE,
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
export const post = (params) => async (dispatch) => {
  dispatch(eventFormSubmitBegin());
  try {
    const response = await axios.post(`${BASE_URL}events`, {
      ...params
    });
    dispatch(eventFormSubmitSuccess(response.data));
    dispatch(eventCreated(response.data));
  } catch (error) {
    dispatch(eventFormSubmitError(error.response.data.errors));
  }
};

/**
 *  Get a specefic year with all his data
 * @param {string} id
 * @param {string} params
 */
export const put = (id, params) => async (dispatch) => {
  dispatch(eventFormSubmitBegin());
  try {
    const response = await axios.put(`${BASE_URL}events/${id}`, {
      ...params
    });
    dispatch(eventFormSubmitSuccess(response.data));
    dispatch(eventCreated(response.data));
  } catch (error) {
    dispatch(eventFormSubmitError(error.response.data.errors));
  }
};

/**
 * delete an event
 * @param {string} id
 * @param {string} monthId
 */
export const deleteEvent = (id, monthId) => async (dispatch) => {
  dispatch(eventFormDeleteBegin());
  try {
    const response = await axios.delete(`${BASE_URL}events/${id}`);
    dispatch(eventFormDeleteSuccess(response.data));
    dispatch(eventDeleted(id, monthId));
  } catch (error) {
    dispatch(eventFormDeleteError(error.response.data.errors));
  }
};
