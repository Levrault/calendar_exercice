import { connect } from 'react-redux';
import Day from './Day';
import { onSelected } from './Day-actions';

/**
 * @param {object} day
 * @param {object} ownProps
 * @returns {object}
 */
const mapStateToProps = ({ day }, ownProps) => {
  return {
    isSelected: ownProps.date === day.selected
  };
};

export default connect(mapStateToProps, { onSelected })(Day);
