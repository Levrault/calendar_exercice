import React from 'react';

const styles = {
  alignItems: 'center',
  display: 'flex',
  height: '90vh',
  justifyContent: 'center',
  overflow: 'hidden'
};

export default (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);
