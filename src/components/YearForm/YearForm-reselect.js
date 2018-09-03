import { createSelector } from 'reselect';
import get from 'lodash/get';

const yearSelector = state => get(state, 'year');

export const dataSelector = createSelector(
  yearSelector,
  year => get(year, 'data', [])
);

export const monthsSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'current.months', [])
);

export const currentYearSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'current.year', 2018)
);

export const currentMonthsSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'current.year.months', [])
);

export const currentYearIdSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'current.id', '')
);

export const loadingSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'loading', false)
);

export const errorSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'error', null)
);

export const minSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'min', 2015)
);

export const maxSelector = createSelector(
  yearSelector,
  calendar => get(calendar, 'max', 2025)
);
