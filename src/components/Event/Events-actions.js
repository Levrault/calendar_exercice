import get from 'lodash/get';
export const EVENTS_INIT = 'EVENT_INIT';
export const EVENTS_DELETE = 'EVENTS_DELETE';
export const EVENTS_ADD = 'EVENTS_ADD';

/**
 * Create a cache of existing events returned
 * by the server
 * @param {object} data response from server
 * @returns {object}
 */
export const eventsInit = (data) => {
  let months = get(data, 'months', []);
  let events = {};
  months.forEach(({ id, events: monthEvents }) => {
    if (monthEvents !== null && monthEvents.length > 0) {
      events[id] = monthEvents;
    }
  });

  return {
    type: EVENTS_INIT,
    payload: {
      events
    }
  };
};

/**
 * Add a new event
 * @param {object} event
 * @returns {object}
 */
export const eventCreated = (event) => ({
  type: EVENTS_ADD,
  payload: {
    event
  }
});

/**
 * Delete an event
 * @param {string} id
 * @param {string} monthId
 * @returns {object}
 */
export const eventDeleted = (id, monthId) => ({
  type: EVENTS_DELETE,
  payload: {
    id,
    monthId
  }
});
