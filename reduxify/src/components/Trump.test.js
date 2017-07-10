import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import FrmTrump from './trumpOpinion/FrmTrump'
import ContentTrump from './trumpOpinion/ContentTrump'

import Trump from './Trump';
import store from '../store/index';

describe('<Trump /> ', () => {
  const trumpWrapper = shallow(<Trump />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(trumpWrapper).toHaveLength(1);
  });
  it('renders a <h1>', () => {
    const trumpH1 = trumpWrapper.find('h1');
    expect(trumpH1).toHaveLength(1);
  });

  it('renders a <FrmTrump>', () => {
    const frmTrump = trumpWrapper.find(FrmTrump);
    expect(frmTrump).toHaveLength(1);
  });

  it('renders a <ContentTrump>', () => {
    const contentTrump = trumpWrapper.find(ContentTrump);
    expect(contentTrump).toHaveLength(1);
  });

  /*
    ============
    STATE TESTS
    ============
  */
  it('should have username state', () => {
    const usernameState = trumpWrapper.state('username')
    expect(usernameState).toEqual('')
  });



})
