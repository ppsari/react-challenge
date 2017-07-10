import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import EnemyData from '../components/Enemies/EnemyData'
import {Enemy} from './Enemy';
import store from '../store/index';

describe('<Enemy /> ', () => {
  const enemyWrapper = shallow(<Provider store={store}><Enemy /></Provider>);
  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(enemyWrapper).toHaveLength(1);
  });

  it('renders a <EnemyData>', () => {
    //belum ada currEnemy jadi harus kosong
    const enemyData = enemyWrapper.find(EnemyData);
    expect(enemyData).toHaveLength(0);
  });

})
