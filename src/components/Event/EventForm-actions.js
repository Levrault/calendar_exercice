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
 * Calendar data has been return
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
 * @param {string} fontColor
 * @returns {object}
 */
export const colorChange = (color, fontColor) => ({
  type: EVENTFORM_COLOR_CHANGE,
  payload: {
    color,
    fontColor
  }
});

/**
 * Reset all store data for Event
 * @returns {object}
 */
export const eventFormReset = () => ({
  type: EVENTFORM_RESET
});

/**
 * Create a new event
 * @async
 * @param {string} params
 * @returns {function}
 */
export const post = (params) => async (dispatch) => {
  dispatch(eventFormSubmitBegin());
  try {
    const { data } = await axios.post(`${BASE_URL}events`, {
      ...params
    });
    dispatch(eventFormSubmitSuccess(data));
    dispatch(eventCreated(data));
  } catch (error) {
    dispatch(eventFormSubmitError(error));
  }
};

/**
 * Delete an existing event
 * @async
 * @param {string} id
 * @param {string} monthId
 * @returns {function}
 */
export const deleteEvent = (id, monthId) => async (dispatch) => {
  dispatch(eventFormDeleteBegin());
  try {
    await axios.delete(`${BASE_URL}events/${id}`);
    dispatch(eventFormDeleteSuccess());
    dispatch(eventDeleted(id, monthId));
  } catch (error) {
    dispatch(eventFormDeleteError(error));
  }
};
