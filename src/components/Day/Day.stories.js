import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import DayWrapper from '../../tools/storybook/DayWrapper';
import Provider from '../../tools/storybook/Provider';
import Day from './Day';

storiesOf('Day', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(DayWrapper)
  .add('default', withMarkdownNotes(`
    # Day

    Is used create/show/delete an event
    `)(() => (
    <Day
      date={text('date', '1-1')}
      value={number('value', 1)}
      onSelected={() => {}}
      selectedDate={text('selectedDate', '')}
      isSelected={boolean('isSelected', false)}
      monthId="a4e8a03dbe54ca7d"
    />
  )))
  .add('selected', () => (
    <Day
      date={text('date', '1-1')}
      value={number('value', 1)}
      onSelected={() => {}}
      selectedDate={text('selectedDate', '1-1')}
      isSelected={boolean('isSelected', true)}
      monthId="a4e8a03dbe54ca7d"
    />
  ))
  .add('show', () => (
    <Day
      date={text('date', '1-1')}
      value={number('value', 1)}
      onSelected={() => {}}
      selectedDate={text('selectedDate', '1-1')}
      isSelected={boolean('isSelected', true)}
      monthId="a4e8a03dbe54ca7d"
      event={{
        monthId: 'a4e8a03dbe54ca7d',
        name: 'Event',
        color: '#EEEEEE',
        day: 1,
        id: '05af70ab81cc3a40'
      }}
    />
  ));
