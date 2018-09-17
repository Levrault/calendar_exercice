import React from 'react';
import { storiesOf } from '@storybook/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Provider from '../../tools/storybook/Provider';
import Loader from './Loader';

storiesOf('Loader', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('default', withMarkdownNotes(`
    # Loader

    A simple loading screen
    `)(() => (
    <Loader />
  )));

