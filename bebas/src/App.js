import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from './components/template/Header'
import Footer from './components/template/Footer'
import NotFound from './components/NotFound'
import Name from './components/Name'
import Enemies from './components/Enemies'
import Enemy from './components/Enemy'

class App extends Component {
  constructor() {
    super();

    this.state = {
      result_quote: '',
      currpage: 'home'
    }
    this.getQuotes = this.getQuotes.bind(this);
    this.changeCurrPage = this.changeCurrPage.bind(this);
  }
  changeCurrPage(page) {
    this.setState({currpage:page})
  }
  getQuotes() {
    axios.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=`)
    .then(response => {
      this.setState({result_quote:response.data[0].content.replace(/<\/?[^>]+(>|$)/g, "")});
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    return (

      <BrowserRouter>
      <div className="App">
          <Header current={this.state.currpage}/>
          <section className="section">
            <div className="container is-fluid">
              <h1 className="title">Do random Things</h1>
              <h2 className="subtitle">
                {this.state.result_quote}
              </h2>
              <Switch>
                <Route exact path="/" component={Name}/>
                <Route exact path="/enemies" component={Enemies}/>
                <Route exact path="/enemy/:id" component={Enemy}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </section>
          <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
