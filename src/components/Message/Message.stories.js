import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Wrapper from '../../tools/storybook/Wrapper';
import Message from './Message';

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('default', () => (
    <Message type={text('type', '')}>Message</Message>
  ))
  .add('with type "success"', () => (
    <Message type={text('type', 'success')}>Message</Message>
  ))
  .add('with type "error"', () => (
    <Message type={text('type', 'error')}>Message</Message>
  ));
