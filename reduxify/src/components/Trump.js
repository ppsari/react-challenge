import React, { Component } from 'react';

// import { getOpinion } from '../actions'
import FrmTrump from './trumpOpinion/FrmTrump'
import ContentTrump from './trumpOpinion/ContentTrump'

class Trump extends Component {

  constructor(props) {
    super(props);
    // super();
    console.log('props trump');
    console.log(props)
    this.state = {
      username: ''
    }
    // this.formSubmit = this.formSubmit.bind(this);
  }



  // formSubmit(username) {
  //   this.setState({
  //     username: username
  //   }, () => {
  //     this.getOpinion();
  //   })
  // }
// <img src={this.state.yourFace}/>
  // <p>{this.state.yourTrump}</p>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getOpinion: (username) => dispatch(getOpinion(username))
//   }
// }
export default Trump;