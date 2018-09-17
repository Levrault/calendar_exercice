import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import FormWrapper from '../../tools/storybook/FormWrapper';
import EventShow from './EventShow';

storiesOf('EventForm', module)
  .addDecorator(withKnobs)
  .addDecorator(FormWrapper)
  .add('default', withMarkdownNotes(`
    # EventShow

    Show/delete a existing event
    `)(() => (
    <EventShow
      onDelete={() => {}}
      onCancel={() => {}}
      monthId="0b54aaf1844478e4"
      name={text('name', 'event show')}
      color={text('color', '#546E7A')}
      day={number('day', 19)}
      id="8b058e6f439a8985"
    />
  )));
