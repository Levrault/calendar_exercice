import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import YearForm from './YearForm';
import getFakeData from '../../tools/test/fakeData';

storiesOf('YearForm', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # YearForm

    Is used to change of calendar. It will get all calendar
    id and get the next calendar available.
    `)(() => (
    <YearForm
      fetchAll={() => {}}
      fetch={() => {}}
      min={number('min', 2018)}
      max={number('max', 2019)}
      ids={getFakeData().year.data}
    />
  )));

