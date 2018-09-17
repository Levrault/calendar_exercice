import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import ColorInputField from './ColorInputField';

storiesOf('Field', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('ColorInputField', withMarkdownNotes(`
    # Error

    Color Input field

    # Proptypes
    * @param {string} label
    * @param {string} code
    * @returns {node}
    `)(() => (
    <ColorInputField
      name="event"
      type="text"
      label="Rappel"
      code={text('code', '#3F51B5')}
      required
    />
  )));

