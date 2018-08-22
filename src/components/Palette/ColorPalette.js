import React from 'react';
import ColorButton from '../Button/ColorButton';
import styles from './ColorPalette.css';

// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
const colors = [
  {
    code: '#FF5252',
    name: 'red'
  },
  {
    code: '#FF4081',
    name: 'pink'
  },
  {
    code: '#E040FB',
    name: 'purple'
  },
  {
    code: '#FF6E40',
    name: 'orange'
  },
  {
    code: '#448AFF',
    name: 'blue'
  },
  {
    code: '#64FFDA',
    name: 'teal'
  },
  {
    code: '#B2FF59',
    name: 'green'
  },
  {
    code: '#FFFF00',
    name: 'yellow'
  }, {
    code: '#795548',
    name: 'brown'
  },
  {
    code: '#546E7A',
    name: 'blueGray'
  },
  {
    code: '#0097A7',
    name: 'cyan'
  },
  {
    code: '#FF6F00',
    name: 'amber'
  }
];

const ColorPalette = () => {
  return (
    <ul className={styles.colorPalette}>
      {
        colors.map(({ code, name }) => (
          <li key={name} className={styles.color} >
            <ColorButton type="button" style={{ backgroundColor: code }} />
          </li>
        ))
      }
    </ul>
  );
};

export default ColorPalette;
