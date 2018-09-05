import { createSelector } from 'reselect';
import get from 'lodash/get';

const eventsSelector = (state, props) => get(state, 'events')[props.id];

export const eventsByMonthIdFilter = createSelector(
  eventsSelector,
  data => data
);
