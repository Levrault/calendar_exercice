
import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * Create selector
 * @param {object} state
 * @returns {function}
 */
const daySelector = state => get(state, 'day');

export const daySelectedSelector = createSelector(
  daySelector,
  day => get(day, 'selected', '')
);
