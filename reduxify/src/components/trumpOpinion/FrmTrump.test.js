import React from 'react';
import { shallow, mount } from 'enzyme';

import FrmTrump from './FrmTrump';
import { Provider } from 'react-redux';
import store from '../../store/index';

describe('<FrmTrump /> ', () => {
  const frmWrapper = shallow(<FrmTrump />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  // it('renders correctly', () => {
  //  expect(frmWrapper).toHaveLength(1);
  // });
  // it('renders a <div>', () => {
  //   const div = frmWrapper.find(div);
  //   expect(div).toHaveLength(1);
  // });
  //
  // it('<div> renders two <div>', () => {
  //   const div = frmWrapper.find(div).find(div);
  //   expect(div).toHaveLength(2);
  // });

  /*
    ============
    STATE TESTS
    ============
  */
  it('should have username state', () => {
    const usernameState = frmWrapper.state('username')
    expect(usernameState).toEqual('')
  });
  /*
    ============
    EVENT TESTS
    ============
  */
  it('should have changeUsername state', () => {
    let newUsername = 'poppy';
    frmWrapper.instance().changeUsername(newUsername)
    let usernameState = frmWrapper.state('username')
    expect(usernameState).toEqual(newUsername)
  });
})
