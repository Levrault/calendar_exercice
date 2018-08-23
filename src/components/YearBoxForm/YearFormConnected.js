import { connect } from 'react-redux';
import { onSubmit } from './YearForm-actions';
import YearForm from './YearForm';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { onSubmit })(YearForm);
