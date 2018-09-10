import React from 'react';

const styles = {
  alignItems: 'center',
  display: 'flex',
  height: '90vh',
  justifyContent: 'center',
  overflow: 'hidden'
};

const cardStyles = {
  display: 'flex',
  maxWidth: '100px',
  position: 'relative'
};

export default (storyFn) => (
  <div style={styles}>
    <div style={cardStyles}>
      { storyFn() }
    </div>
  </div>
);
