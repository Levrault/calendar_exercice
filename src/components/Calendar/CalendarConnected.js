import { connect } from 'react-redux';
import Calendar from './Calendar';
import {
  currentYearSelector,
  monthsSelector,
  loadingSelector,
  errorSelector
} from '../YearForm/YearForm-reselect';

const mapStateToProps = (state) => {
  return {
    year: currentYearSelector(state),
    months: monthsSelector(state),
    isLoading: loadingSelector(state),
    error: errorSelector(state)
  };
};

export default connect(mapStateToProps)(Calendar);
