import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * Create selector
 * @param {object} state
 * @param {object} props
 * @returns {function}
 */
const eventsSelector = (state, props) => get(state, 'events')[props.id];

export const eventsByMonthIdFilter = createSelector(
  eventsSelector,
  data => data
);
