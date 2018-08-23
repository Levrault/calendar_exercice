import { connect } from 'react-redux';
import Calendar from './Calendar';
import { fetch } from './Calendar-actions';

const mapStateToProps = ({ calendar }) => {
  const { months, loading } = calendar;
  return {
    months,
    isLoading: loading
  };
};

export default connect(mapStateToProps, { fetch })(Calendar);
