import React from 'react';
import { storiesOf } from '@storybook/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Provider from '../../tools/storybook/Provider';
import Navbar from './Navbar';

storiesOf('Nav', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('default', withMarkdownNotes(`
    # Navbar

    A simple navbar
    `)(() => (
    <Navbar />
  )));

