import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow, mount,render } from 'enzyme'

import App from './App';

describe('<App /> ', () => {
  const appWrapper = shallow(<App />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(appWrapper).toHaveLength(1);
  });


})
