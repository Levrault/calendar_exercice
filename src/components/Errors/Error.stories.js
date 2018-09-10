import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import Wrapper from '../../tools/storybook/Wrapper';
import Error from './Error';

storiesOf('Error', module)
  .addDecorator(withKnobs)
  .addDecorator(Wrapper)
  .add('PageNotFound', withMarkdownNotes(`
    # Error

    Is use to map error code to component

    # Proptypes
    * @param {object} response
    * @returns {node}
      `)(() => (
    <Error response={{ status: 404 }} />
  )));

