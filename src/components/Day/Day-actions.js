export const DAY_SELECTED = 'DAY_SELECTED';

/**
 * When a day is selected
 * @param {string} selectedDay
 * @returns {object}
 */
export const onSelected = (selectedDay) => (
  {
    type: DAY_SELECTED,
    payload: {
      selected: selectedDay
    }
  }
);

