export const DAY_SELECTED = 'DAY_SELECTED';

/**
 * On submit
 * @param {string} selectedDay
 */
export const onSelected = (selectedDay) => (
  {
    type: DAY_SELECTED,
    payload: {
      selected: selectedDay
    }
  }
);

