import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import CalendarButton from './CalendarButton';

storiesOf('CalendarButton', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # CalendarButton

    CalendarButton is used by CalendarButtonConnected, his role
    is to display the EventForm component and being active when an
    even has already been added

    # Proptypes
    * @param {bool} active
    * @param {string} color
    * @param {node} children
    * @returns {node}
      `)(() => (
    <CalendarButton
      color={text('color', '')}
      active={boolean('active', false)}
    >
      1
    </CalendarButton>
  )))
  .add('with active', () => (
    <CalendarButton
      color={text('color', '#EEEEEE')}
      active={boolean('active', true)}
    >
      1
    </CalendarButton>
  ))
  .add('with active and color', () => (
    <CalendarButton
      color={text('color', '#FF4081')}
      active={boolean('active', true)}
    >
      1
    </CalendarButton>
  ));

