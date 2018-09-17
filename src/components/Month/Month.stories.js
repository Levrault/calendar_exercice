import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import Provider from '../../tools/storybook/Provider';
import Month from './Month';

storiesOf('Month', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # Month

    Compute data to display a month 
    `)(() => (
    <Month
      name={text('name', 'January')}
      chronology={number('chronology', 1)}
      numberOfDays={number('numberOfDays', 31)}
      firstDayIndex={number('firstDayIndex', 1)}
      calendarId="576c020e2bfc5849"
      id="a4e8a03dbe54ca7d"
      events={[]}
    />
  )))
  .add('with events', () => (
    <Month
      name={text('name', 'February')}
      chronology={number('chronology', 2)}
      numberOfDays={number('numberOfDays', 28)}
      firstDayIndex={number('firstDayIndex', 3)}
      calendarId="576c020e2bfc5849"
      id="0b54aaf1844478e4"
      events={[{
        monthId: '0b54aaf1844478e4',
        name: 'hello',
        color: '#EEEEEE',
        day: 8,
        id: '05af70ab81cc3a40'
      },
      {
        monthId: '0b54aaf1844478e4',
        name: 'hello',
        color: '#546E7A',
        day: 19,
        id: '8b058e6f439a8985'
      }]}
    />
  ));

