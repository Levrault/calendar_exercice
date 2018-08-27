import { createSelector } from 'reselect';
import get from 'lodash/get';

const calendarSelector = state => get(state, 'calendar');

export const monthsSelector = createSelector(
  calendarSelector,
  calendar => get(calendar, 'months', [])
);

export const loadingSelector = createSelector(
  calendarSelector,
  calendar => get(calendar, 'loading', false)
);

export const errorSelector = createSelector(
  calendarSelector,
  calendar => get(calendar, 'error', null)
);

