import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow, mount,render } from 'enzyme'

import Header from './Header';

describe('<Header /> ', () => {
  const headerWrapper = shallow(<Header />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(headerWrapper).toHaveLength(1);
  });


})
