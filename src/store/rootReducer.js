import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { dayReducer } from '../components/Day/Day-reducer';

export default combineReducers({
  form: formReducer,
  day: dayReducer
});
