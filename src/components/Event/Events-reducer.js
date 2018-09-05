import {
  EVENTS_INIT,
  EVENTS_DELETE,
  EVENTS_ADD
} from './Events-actions';

const initialState = {};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
  case EVENTS_INIT:
    return {
      ...state,
      ...action.payload.events
    };

  case EVENTS_ADD:
    const { monthId: monthIdAdd } = action.payload.event;
    let nextEvents = [];
    if (state[monthIdAdd]) {
      nextEvents = state[monthIdAdd];
    }
    return {
      ...state,
      [monthIdAdd]: [...nextEvents, action.payload.event]
    };

  case EVENTS_DELETE:
    const { id, monthId: monthIdDelete } = action.payload;
    let prevEvents = state[monthIdDelete];
    return {
      ...state,
      [monthIdDelete]: prevEvents.filter(event => event.id !== id)
    };

  default:
    return state;
  }
};
