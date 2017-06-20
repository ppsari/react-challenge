import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

class Enemies extends Component {
  constructor() {
    super();
    this.state = {
      enemies : []
    }
    this.getEnemies = this.getEnemies.bind(this);
  }

  componentDidMount() {
    this.getEnemies();
  }

  getEnemies() {
    axios.get(`http://swapi.co/api/people/`)
    .then(response => {
      this.setState({enemies:response.data.results});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">Enemies</h1>
        <h3 className="subtitle">
          As a big fans of Trump, we have many enemies. :( Here top 10 Nemesis of our idol. <br/>
          Memorize their informations to make sure you wont attack innocent civilian in our FanWAR.
        </h3>
        <div className="columns is-multiline">
        {
          this.state.enemies.map( (enemy,idx) => (
            <div className=" column is-3" key={idx.toString()}>
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
                    <Link to={'/enemy/'+(idx+1)}><button className="button is-dark">View Enemy Detail</button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        }



        </div>
      </div>
    );
  }
}

export default Enemies;
