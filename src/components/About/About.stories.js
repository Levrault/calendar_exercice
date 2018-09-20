import React from 'react';
import { storiesOf } from '@storybook/react';
import ContentWrapper from '../../tools/storybook/ContentWrapper';
import About from './About';

storiesOf('About', module)
  .addDecorator(ContentWrapper)
  .add('default', () => (
    <About />
  ));
