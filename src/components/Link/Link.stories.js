import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import StoryRouter from 'storybook-react-router';
import Wrapper from '../../tools/storybook/Wrapper';
import Link from './Link';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .addDecorator(Wrapper)
  .add('default', withMarkdownNotes(`
    # Link

    use react-router component to manage link
    `)(() => (
    <Link
      title={text('title', 'link')}
      to={text('to', 'to')}
    >
      Link
    </Link>
  )));
