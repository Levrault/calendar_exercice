import { combineReducers } from 'redux';
import { dayReducer } from '../components/Day/Day-reducer';
import { yearFormReducer } from '../components/YearForm/YearForm-reducer';
import { eventFormReducer } from '../components/Event/EventForm-reducer';

export default combineReducers({
  day: dayReducer,
  year: yearFormReducer,
  event: eventFormReducer
});
