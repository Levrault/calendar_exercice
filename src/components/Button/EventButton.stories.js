import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import EventButton from './EventButton';

storiesOf('EventButton', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # EventButton

    Display an icon and manage an 'active' css class
    when the props active is pass to true

    # Proptypes
    * @param {bool} active
    * @returns {node}
      `)(() => (
    <EventButton type="button" active={boolean('active', false)}>
      <i className="material-icons">clear</i>
    </EventButton>
  )))
  .add('active', () => (
    <EventButton type="button" active={boolean('active', false)}>
      <i className="material-icons">clear</i>
    </EventButton>
  ));

