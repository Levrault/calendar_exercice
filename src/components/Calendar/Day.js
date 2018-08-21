import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class Day extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  /**
   * active day when clicked
   */
  handleClick = (event) => {
    this.setState({
      selected: !this.state.selected
    });
  }

  /**
  * Render
  */
  render () {
    const { selected } = this.state;
    const { value } = this.props;
    return (
      <Button onClick={this.handleClick} active={selected}>
        {value}
      </Button>
    );
  }
}

Day.propTypes = {
  value: PropTypes.number.isRequired
};

export default Day;
