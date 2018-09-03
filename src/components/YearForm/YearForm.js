import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './YearForm.css';

/**
 * Create a profile
 */
class YearForm extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      value: props.min
    };
  }

  /**
   * fetch data
   */
  componentDidMount () {
    this.props.fetchAll();
  }

  /**
   * Fetch an year
   * @param {object} prevProps
   * @param {object} prevState
   */
  componentDidUpdate (prevProps, prevState) {
    // value is updated
    const { value } = this.state;
    if (value !== prevState.value) {
      this.fetchData(value);
    }

    // first fetching
    if (prevProps.ids !== this.props.ids) {
      this.fetchData(value);
    }
  }

  /**
   * fetch data
   * @param {number}
   */
  fetchData = (value) => {
    const { ids, fetch } = this.props;
    const year = ids.find(elem => elem.year === value);
    if (year && year.id) {
      fetch(year.id);
    }
  }

  updateValue = (value) => () => {
    const { min, max } = this.props;

    // if value are in our range
    if (value >= min && value <= max) {
      this.setState({
        value
      });
    }
  }

  /**
  * Render
  */
  render () {
    const { min, max, ids } = this.props;
    const { value } = this.state;

    // @todo set a real loader
    if (!ids.length) return <span> Loading </span>;

    const leftChevronClassName = classnames(styles.button, {
      [styles.inactive]: value === min
    });
    const rightChevronClassName = classnames(styles.button, {
      [styles.inactive]: value === max
    });
    return (
      <form className={styles.profileForm}>
        <span className={styles.countdown}>

          <button className={leftChevronClassName} type="button" onClick={this.updateValue(value - 1)}>
            <i className="material-icons">chevron_left</i>
          </button>

          <input className={styles.input} type="number" value={value} readOnly />

          <button className={rightChevronClassName} type="button" onClick={this.updateValue(value + 1)}>
            <i className="material-icons">chevron_right</i>
          </button>

        </span>
      </form>
    );
  }
}

YearForm.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  ids: PropTypes.any
};

YearForm.defaultProps = {
  min: 2018,
  max: 2019
};

export default YearForm;
