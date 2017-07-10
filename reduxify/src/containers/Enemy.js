import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getEnemy } from '../actions';
import EnemyData from '../components/Enemies/EnemyData';

let cid;
export class Enemy extends Component {
  constructor(props) {
    super(props);
    let url = document.URL;
    cid =  url.substr(url.lastIndexOf('/') + 1)
  }

  componentDidMount() {
    if (typeof this.props.getEnemy !== 'undefined') this.props.getEnemy();
  }

  render() {
    let dt = <div></div>;
    dt = typeof this.props.currEnemy != 'undefined' ?
      (<EnemyData cenemy={this.props.currEnemy}/>) :
      (<div> Searching...</div>)
    return ( <div> {dt} </div> );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getEnemy: () => dispatch(getEnemy(cid)), }
}

const mapStateToProps = (state) => {
  return {
    currEnemy: state.enemy.currEnemy,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Enemy);