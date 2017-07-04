import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';


class EnemyData extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.cenemy)
  }


  render() {
    let dt;
    if (typeof this.props.cenemy !== 'undefined') {
      let cenemy = this.props.cenemy
      dt =
      <div>
        <h1 className="title">{cenemy.name}</h1>
        <h3> To defeat your enemy, you have to know {cenemy.gender === 'male'? 'him'  : 'her'}</h3>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={'https://api.adorable.io/avatars/285/'+cenemy.name+'.png'} alt={cenemy.name} />
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
                <p className="title is-4">{cenemy.name}</p>
                <p className="subtitle is-6">{cenemy.gender}</p>
              </div>
            </div>
            <div className="content">
              {cenemy.name} is a {cenemy.gender} {cenemy.species} from {cenemy.homeworld} with height {cenemy.height  || 'secret'} cm and mass {cenemy.mass || 'secret'} kg.
              {cenemy.gender === 'male'? 'He'  : 'She'} has {cenemy.hair_color} hair, evil-looking {cenemy.eye_color} eye and {cenemy.skin_color || 'unknown'} skin.
              <br/>
              We have to defeat him for the Glory of Trump
            </div>
              <Link to={'/enemies/'}><button className="button is-dark">Back to enemies</button></Link>
          </div>
        </div>
      </div>
    } else {
      <div> We havent get a clear result</div>
    }
    console.log('---------------------------------------3')
    // console.log(this.props.enemies);
    return (
      <div>
      {
        dt
      }

      </div>
    );
  }
}
export default EnemyData;
