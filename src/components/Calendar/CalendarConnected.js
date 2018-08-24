import { connect } from 'react-redux';
import Calendar from './Calendar';
import { fetch } from './Calendar-actions';

const mapStateToProps = ({ calendar, form: { year } }) => {
  const { months, loading, error } = calendar;
  return {
    months,
    isLoading: loading,
    error,
    currentYear: year.values.year
  };
};

export default connect(mapStateToProps, { fetch })(Calendar);
