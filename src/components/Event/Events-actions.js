import get from 'lodash/get';
export const EVENTS_INIT = 'EVENT_INIT';
export const EVENTS_DELETE = 'EVENTS_DELETE';
export const EVENTS_ADD = 'EVENTS_ADD';

/**
 * Init all current events that already
 * been added to the server
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
 * Add new event
 * @param {object} event
 */
export const eventCreated = (event) => {
  return {
    type: EVENTS_ADD,
    payload: {
      event
    }
  };
};

/**
 * Delete an event
 * @param {string} id
 * @param {string} monthId
 */
export const eventDeleted = (id, monthId) => {
  return {
    type: EVENTS_DELETE,
    payload: {
      id,
      monthId
    }
  };
};
