import { connect } from 'react-redux';
import Day from './Day';
import { onSelected } from './Day-actions';
import { daySelectedSelector } from './Day-reselect';

/**
 * @param {object} state
 * @param {object} ownProps
 * @returns {object}
 */
const mapStateToProps = (state, ownProps) => {
  const date = daySelectedSelector(state);
  return {
    selectedDate: date,
    isSelected: date === ownProps.date
  };
};

export default connect(mapStateToProps, { onSelected })(Day);
