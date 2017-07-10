import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';

import EnemiesData from '../components/Enemies/EnemiesData'
import {Enemies} from './Enemies';
import store from '../store/index';

describe('<Enemies /> ', () => {
  const enemiesWrapper = shallow(<Enemies />);
  const enemiesPWrapper = mount(<Provider store={store}><Enemies /></Provider>);

  /*
    ============
    OUTPUT TESTS
    ============
  */
  it('renders correctly', () => {
   expect(enemiesPWrapper).toHaveLength(1);
  });

  it('renders a <h1>', () => {
    const enemiesH1 = enemiesWrapper.find('h1');
    expect(enemiesH1).toHaveLength(1);
  });

  it('renders a <h3>', () => {
    const enemiesH3 = enemiesWrapper.find('h3');
   expect(enemiesH3).toHaveLength(1);
  });

  it('renders a <EnemiesData>', () => {
    //belum ada currEnemy jadi harus kosong
    const enemyData = enemiesPWrapper.find(EnemiesData);
    console.log('---------------------------')
    console.log(enemyData.length)
    expect(enemyData).toHaveLength(0);
  });

})
