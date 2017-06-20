import React, { Component } from 'react';
import axios from 'axios';

import Trump from './result/Trump'
import Face from './result/Face'
import Content from './template/Content'

class Name extends Component {
  constructor() {
    super();

    this.state = {
      result_trump : '',
      username: '',
      result_img: ''
    }
    this.getTrump = this.getTrump.bind(this);
    this.getImage = this.getImage.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

  }
  getTrump() {
    let username = this.state.username;
    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${username}`)
    .then(response => {
      this.setState({result_trump:response.data.message});
    })
    .catch(err => {
      console.log(err);
    })
  }
  getImage() {
    this.setState({ result_img: `https://api.adorable.io/avatars/285/${this.state.username}.png`})
  }

  formSubmit(username) {
    this.setState({
      username: username
    }, ()=> {
      this.getTrump();
      this.getImage();
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">What Trump think about you</h1>
        <div className="columns">
          <div className="column is-6">
            <Content
              formSubmit={this.formSubmit}
            />
          </div>
        </div>
        <div className="columns">
          <Face result_img={this.state.result_img}/>
          <Trump result_trump={this.state.result_trump}/>
        </div>
      </div>
    );
  }
}

export default Name;
