import React from 'react';
import { storiesOf } from '@storybook/react';
import SizedWrapper from '../../tools/storybook/SizedWrapper';
import WeekHeader from './WeekHeader';

storiesOf('WeekHeader', module)
  .addDecorator(SizedWrapper)
  .add('default', () => (
    <WeekHeader>Message</WeekHeader>
  ));
