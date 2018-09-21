import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * Create selector
 * @param {object} state
 * @returns {function}
 */
const yearSelector = state => get(state, 'year');

export const dataSelector = createSelector(
  yearSelector,
  year => get(year, 'data', [])
);

export const monthsSelector = createSelector(
  yearSelector,
  year => get(year, 'current.months', [])
);

export const currentYearSelector = createSelector(
  yearSelector,
  year => get(year, 'current.year', 2018)
);


export const currentYearIdSelector = createSelector(
  yearSelector,
  year => get(year, 'current.id', '')
);

export const loadingSelector = createSelector(
  yearSelector,
  year => get(year, 'loading', false)
);

export const errorSelector = createSelector(
  yearSelector,
  year => get(year, 'error', null)
);

export const minSelector = createSelector(
  yearSelector,
  year => get(year, 'min', 2015)
);

export const maxSelector = createSelector(
  yearSelector,
  year => get(year, 'max', 2025)
);
