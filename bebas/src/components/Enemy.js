import React, { Component } from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Enemy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      enemy : {},
      redirect: false
    }
    this.getEnemy = this.getEnemy.bind(this);
  }

  componentDidMount() {

    if (this.state.id === undefined) {
      this.setState({redirect:true})
    }
    else this.getEnemy();
  }
  getEnemy() {
    let _self = this;

    axios.get(`http://swapi.co/api/people/${this.state.id}`)
    .then(response => {
      let enemyDt = response.data;
      if (response.data.hasOwnProperty('detail')) {
        this.setState({redirect:true})
      }
      else {
        axios.get(`${response.data.homeworld}`)
        .then(home => {
          enemyDt.homeworld = home.data.name;
          axios.get(`${response.data.species}`)
          .then(species=> {
            enemyDt.species = species.data.name;
            enemyDt.finishLoad = true
            this.setState({enemy:enemyDt});
          })
        })
        .catch(err=>{
          console.log(err)
          this.setState({redirect:true})
        })
      }

    })
    .catch(err => {
      console.log(err);
      this.setState({redirect:true})
    })
  }


  render() {
    let enemy = this.state.enemy;
    if (this.state.redirect) {
      return (<Redirect to={{ pathname: '/' }} />)
    } else if (typeof this.state.enemy.finishLoad === 'undefined') {
      return (
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={50000}
            transitionLeaveTimeout={30000}>
            <div>
            <h1 className="title"
              style={{animationDirection: "reverse"}}> Fetching Detail ..... Spying into nemesis base</h1></div>
            </ReactCSSTransitionGroup>

      )
    }
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
              {enemy.name} is a {enemy.gender} {enemy.species} from {enemy.homeworld} with height {enemy.height} cm and mass {enemy.mass} kg.
              {enemy.gender === 'male'? 'He'  : 'She'} has {enemy.hair_color} hair, evil-looking {enemy.eye_color} eye and {enemy.skin_color} skin.
              <br/>
              We have to defeat him for the Glory of Trump
            </div>
              <Link to={'/enemies/'}><button className="button is-dark">Back to enemies</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Enemy;
