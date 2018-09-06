import { createSelector } from 'reselect';
import get from 'lodash/get';

const eventFormSelector = state => get(state, 'eventForm');

export const colorSelector = createSelector(
  eventFormSelector,
  eventForm => get(eventForm, 'color', '')
);

export const nameSelector = createSelector(
  eventFormSelector,
  eventForm => get(eventForm, 'name', '')
);

export const errorSelector = createSelector(
  eventFormSelector,
  eventForm => get(eventForm, 'error', null)
);

export const successSelector = createSelector(
  eventFormSelector,
  eventForm => get(eventForm, 'success', false)
);
