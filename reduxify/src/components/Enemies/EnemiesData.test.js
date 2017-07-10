import React from 'react';
import { shallow, mount } from 'enzyme';

import EnemiesData from './EnemiesData';
import { Provider } from 'react-redux';
import store from '../../store/index';

describe('<EnemiesData /> ', () => {
  const enemiesDataWrapper = shallow(<EnemiesData />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(enemiesDataWrapper).toHaveLength(1);
  });

})
