import { createSelector } from 'reselect';
import { fontColors } from '../Palette/colors-constant';
import get from 'lodash/get';

/**
 * Create selector
 * @param {object} state
 * @returns {function}
 */
const eventFormSelector = state => get(state, 'eventForm');

export const colorSelector = createSelector(
  eventFormSelector,
  eventForm => get(eventForm, 'color', '')
);

export const fontColorSelector = createSelector(
  eventFormSelector,
  eventForm => get(eventForm, 'fontColor', fontColors.dark)
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
