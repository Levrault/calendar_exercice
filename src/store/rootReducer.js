import { combineReducers } from 'redux';
import { dayReducer } from '../components/Day/Day-reducer';
import { eventFormReducer } from '../components/Event/EventForm-reducer';
import { eventsReducer } from '../components/Event/Events-reducer';

export default combineReducers({
  day: dayReducer,
  eventForm: eventFormReducer,
  events: eventsReducer
});
