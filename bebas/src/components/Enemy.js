import React, { Component } from 'react';
import axios from 'axios';

class Enemy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      enemy : {}
    }
    this.getEnemy = this.getEnemy.bind(this);
  }

  componentDidMount() {
    this.getEnemy();
  }
  getEnemy() {
    axios.get(`http://swapi.co/api/people/${this.state.id}`)
    .then(response => {
      this.setState({enemy:response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    let enemy = this.state.enemy;
    return (
      <div>
        <h1 className="title">{enemy.name}</h1>
        <h3> To defeat your enemy, you have to know {enemy.gender === 'male'? 'him'  : 'her'}</h3>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={'https://api.adorable.io/avatars/285/'+enemy.name+'.png'} alt={enemy.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{enemy.name}</p>
                <p className="subtitle is-6">{enemy.gender}</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Enemy;
