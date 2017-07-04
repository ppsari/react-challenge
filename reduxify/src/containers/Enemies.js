import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EnemiesData from '../components/Enemies/EnemiesData';
import { getEnemies } from '../actions';

class Enemies extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getEnemies();
  }

  render() {
    let dt;
    dt = typeof this.props.enemies != 'undefined' ?
      (<EnemiesData data={this.props.enemies}/>) :
      (<div>Trump decided to be kind</div>)
    return (
      <div>
        <h1 className="title">Enemies</h1>
        <h3 className="subtitle">
          As a big fans of Trump, we have many enemies. :| Here top 10 Nemesis of our idol. <br/>
          Memorize their informations to make sure you wont attack innocent civilian in our FanWAR.
        </h3>
        { dt }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getEnemies: () => dispatch(getEnemies()) }
}

const mapStateToProps = (state) => {
  return { enemies: state.enemy.enemies }
}
export default connect(mapStateToProps,mapDispatchToProps)(Enemies);