import React from 'react';
import { shallow, mount } from 'enzyme';

import NotFound from './NotFound';
import store from '../store/index';

describe('<NotFound /> ', () => {
  const notFoundWrapper = shallow(<NotFound />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(notFoundWrapper).toHaveLength(1);
  });



})
