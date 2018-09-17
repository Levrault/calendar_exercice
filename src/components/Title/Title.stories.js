import React from 'react';
import { storiesOf } from '@storybook/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import Title from './Title';

storiesOf('Title', module)
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # Title

    Simple month title
    `)(() => (
    <Title>
      This is a title
    </Title>
  )));

