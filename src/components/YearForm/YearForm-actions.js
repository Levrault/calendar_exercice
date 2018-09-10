import axios from 'axios';
import minBy from 'lodash/minBy';
import maxBy from 'lodash/maxBy';
import { eventsInit } from '../Event/Events-actions';

export const YEAR_FETCH_BEGIN = 'CALENDAR_FETCH_BEGIN';
export const YEAR_FETCH_SUCCESS = 'CALENDAR_FETCH_SUCCESS';
export const YEAR_FETCH_FAILURE = 'CALENDAR_FETCH_FAILURE';
export const YEAR_FETCH_ALL_BEGIN = 'CALENDAR_FETCH_ALL_BEGIN';
export const YEAR_FETCH_ALL_SUCCESS = 'CALENDAR_FETCH_ALL_SUCCESS';
export const YEAR_FETCH_ALL_FAILURE = 'CALENDAR_FETCH_ALL_FAILURE';

/**
 * Begin to fetch data
 * @returns {object}
 */
export const yearFetchAllBegin = () => ({
  type: YEAR_FETCH_ALL_BEGIN
});

/**
 * Calendar data has been returned
 * @param {array} months
 * @returns {object}
 */
export const yearFetchAllSuccess = data => ({
  type: YEAR_FETCH_ALL_SUCCESS,
  payload: {
    data,
    min: minBy(data, 'year').year,
    max: maxBy(data, 'year').year
  }
});

/**
 * Receive an error
 * @param {object} error
 * @returns {object}
 */
export const yearFetchAllError = error => ({
  type: YEAR_FETCH_ALL_FAILURE,
  payload: { error }
});

/**
 * Begin to fetch data
 * @returns {object}
 */
export const yearFetchBegin = () => ({
  type: YEAR_FETCH_BEGIN
});

/**
 * Calendar data has been returned
 * @param {array} current
 * @returns {object}
 */
export const yearFetchSuccess = current => ({
  type: YEAR_FETCH_SUCCESS,
  payload: {
    current
  }
});

/**
 * Receive an error
 * @param {object} error
 * @returns {object}
 */
export const yearFetchError = error => ({
  type: YEAR_FETCH_FAILURE,
  payload: { error }
});

/**
 *  Get a specefic year with all his data
 * @param {string} id
 */
export const fetch = (id) => async (dispatch) => {
  dispatch(yearFetchBegin());
  try {
    const { data } = await axios.get(`${BASE_URL}calendar/${id}`, {
      params: {
        full: true
      }
    });
    dispatch(yearFetchSuccess(data));
    dispatch(eventsInit(data));
  } catch (error) {
    dispatch(yearFetchError(error));
  }
};

/**
 * Fetch all year ids
 * @param {bool} full
 */
export const fetchAll = (full) => async (dispatch) => {
  dispatch(yearFetchAllBegin());
  try {
    const { data } = await axios.get(`${BASE_URL}calendar`, {
      params: {
        full
      }
    });
    dispatch(yearFetchAllSuccess(data));
  } catch (error) {
    dispatch(yearFetchAllError(error));
  }
};
