import React from 'react';
import renderer from 'react-test-renderer';
import HomeComponent from './index';

import store from '../../store';

it('Testing Home Component', () => {
  const tree = renderer
    .create(<HomeComponent store={store} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
