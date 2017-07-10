import React, { Component } from 'react';

import FrmTrump from './trumpOpinion/FrmTrump'
import ContentTrump from './trumpOpinion/ContentTrump'

class Trump extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  render () {
    return (
      <div>
        <h1 className="title">What Trump think about you</h1>
        <div className="columns">
          <div className="column is-6">
            <FrmTrump/>
          </div>
        </div>
        <ContentTrump/>
      </div>
    )
  }
}

export default Trump;