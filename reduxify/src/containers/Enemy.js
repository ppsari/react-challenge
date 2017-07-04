import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getEnemy } from '../actions';
import EnemyData from '../components/Enemies/EnemyData';



let cid;
class Enemy extends Component {
  constructor(props) {
    super(props);

    let url = document.URL;
    cid =  url.substr(url.lastIndexOf('/') + 1),

    console.log(cid);


    console.log('----end enemy-----')
  }

  componentDidMount() {
    console.log('will be mounted')
    console.log(this.props)

    console.log('---------------------------aaa')
    if (typeof this.props.getEnemy !== 'undefined') this.props.getEnemy();
  }

  render() {
    console.log('---------render-------------')
    console.log(this.props)
    let dt = <div></div>;
    dt = typeof this.props.currEnemy != 'undefined' ?
      (<EnemyData cenemy={this.props.currEnemy}/>) :
      (<div> Searching...</div>)
    return (
      <div>
        {dt}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('----------------------a')


  return { getEnemy: () => dispatch(getEnemy(cid)), }
}

//
const mapStateToProps = (state) => {
  console.log('--------------------------b')
  console.log(state.enemy)
  return {
    currEnemy: state.enemy.currEnemy,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Enemy);