import { connect } from 'react-redux';
import Calendar from './Calendar';
import {
  monthsSelector,
  loadingSelector,
  errorSelector
} from './Calendar-reselect';
import { yearValueSelector } from '../YearForm/YearForm-reselect';
import { fetch } from './Calendar-actions';

const mapStateToProps = (state) => {
  return {
    months: monthsSelector(state),
    isLoading: loadingSelector(state),
    error: errorSelector(state),
    currentYear: yearValueSelector(state)
  };
};

export default connect(mapStateToProps, { fetch })(Calendar);
