
import { createSelector } from 'reselect';
import get from 'lodash/get';

const daySelector = state => get(state, 'day');

export const daySelectedSelector = createSelector(
  daySelector,
  day => get(day, 'selected', '')
);
