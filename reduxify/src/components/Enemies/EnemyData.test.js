import React from 'react';
import { shallow, mount } from 'enzyme';

import EnemyData from './EnemyData';
import { Provider } from 'react-redux';
import store from '../../store/index';

describe('<EnemyData /> ', () => {
  const enemyDataWrapper = shallow(<EnemyData />);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(enemyDataWrapper).toHaveLength(1);
  });

})
