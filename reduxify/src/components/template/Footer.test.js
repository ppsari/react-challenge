import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow, mount,render } from 'enzyme'

import Footer from './Footer';

describe('<Footer /> ', () => {
  const footerWrapper = shallow(<Footer />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(footerWrapper).toHaveLength(1);
  });


})
