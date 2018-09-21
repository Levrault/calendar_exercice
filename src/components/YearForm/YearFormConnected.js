import { connect } from 'react-redux';
import YearForm from './YearForm';
import { dataSelector, minSelector, maxSelector } from './YearForm-reselect';
import { fetchAll, fetch } from './YearForm-actions';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => ({
  ids: dataSelector(state),
  min: minSelector(state),
  max: maxSelector(state)
});

export default connect(mapStateToProps, { fetchAll, fetch })(YearForm);
