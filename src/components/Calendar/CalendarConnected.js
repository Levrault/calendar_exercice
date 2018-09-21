import { connect } from 'react-redux';
import Calendar from './Calendar';
import {
  currentYearSelector,
  monthsSelector,
  loadingSelector,
  errorSelector
} from '../YearForm/YearForm-reselect';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => ({
  year: currentYearSelector(state),
  months: monthsSelector(state),
  isLoading: loadingSelector(state),
  error: errorSelector(state)
});

export default connect(mapStateToProps)(Calendar);
