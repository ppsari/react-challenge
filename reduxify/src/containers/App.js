import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import {
    Header,
    Footer,
    NotFound,
    Trump,
    // Name,
    Enemies,
    Enemy
  } from '../components'
import store from '../store';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <Header current={''}/>
            <section className="section">
              <div className="container is-fluid">
                <h1 className="title">Do random Things</h1>
                <h2 className="subtitle">

                </h2>
                <Switch>
                  <Route exact path="/" component={Trump}/>
                  <Route exact path="/enemies" component={Enemies}/>
                  <Route exact path="/enemy/:id" component={Enemy}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </section>
            <Footer />
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
