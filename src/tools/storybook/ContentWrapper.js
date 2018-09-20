import React from 'react';

const styles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
};

export default (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);
