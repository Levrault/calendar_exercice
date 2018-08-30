import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { dayReducer } from '../components/Day/Day-reducer';
import { yearFormReducer } from '../components/YearForm/YearForm-reducer';

export default combineReducers({
  form: formReducer,
  day: dayReducer,
  year: yearFormReducer
});
