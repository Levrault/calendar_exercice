import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import SizedWrapper from '../../tools/storybook/SizedWrapper';
import ColorPalette from './ColorPalette';
import colors from './colors-constant';

storiesOf('ColorPalette', module)
  .addDecorator(withKnobs)
  .addDecorator(SizedWrapper)
  .add('default', withMarkdownNotes(`
    # ColorPalette

    Show/hide animation and display color button
    
    # Proptypes
    * @param {bool} active
    * @param {string} value
    * @param {function} onClick
      `)(() => (
    <ColorPalette
      active={boolean('active', true)}
      onClick={() => {}}
      value={text('value', colors[0].code)}
    />
  )));

