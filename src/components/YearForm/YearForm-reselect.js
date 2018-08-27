import { createSelector } from 'reselect';
import get from 'lodash/get';

const formSelector = state => get(state, 'form');

export const yearValueSelector = createSelector(
  formSelector,
  form => get(form, 'year.values.year', 2018)
);

