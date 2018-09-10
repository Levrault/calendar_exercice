import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import ColorButton from './ColorButton';

storiesOf('ColorButton', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # ColorButton

    Used by ColorPalette, his role
    is to let the user choose the wanted color
    for his event.

    # Proptypes
    * @param {bool} active
    * @returns {node}
      `)(() => (
    <ColorButton
      value={text("value", "#EEEEEE")}
      active={boolean('active', false)}
    />
  )))
  .add('selected', () => (
    <ColorButton
      value={text('value', '#EEEEEE')}
      active={boolean('active', true)}
    />
  ));

