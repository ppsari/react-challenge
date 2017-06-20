import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currpage: ''
    }
    console.log()
  }
  handleClick(pg) {
    console.log(pg);
    this.setState({currpage: pg})
  }

  render() {
    return (
      <section className="hero is-dark is-medium">
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="images/bulma-type-white.png" alt="Logo"/>
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <a className="nav-item is-active">
                  TRUMP
                </a>
                <a className="nav-item">
                  Fanbase
                </a>
                <a className="nav-item">
                  Donate
                </a>
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body" style={{background:`url('http://i2.cdn.cnn.com/cnnnext/dam/assets/150729125110-04-trump-quotes-super-169.jpg') center center fixed `, backgroundSize:'cover',backgroundRepeat:'noRepeat' ,overflow: 'hidden' }}>
          <div className="container has-text-centered">
            <h1 className="title">
              Trump Fanbase
            </h1>
            <h2 className="subtitle">
              Mengakrabkan diri dengan konsep TRUMP.
            </h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <Link to={'/'}>
                  <li className={ this.state.currpage === 'home'? 'is-active': ''} onClick={()=>this.handleClick('home')}><a>Trump Opinion</a></li>
                </Link>
                <Link to={'/enemies'}>
                  <li className={ this.state.currpage === 'nemesis'? 'is-active': ''} onClick={()=>this.handleClick('nemesis')}><a>Nemesis</a></li>
                </Link>

              </ul>
            </div>
          </nav>
        </div>
      </section>

    )
  }

}

export default Header