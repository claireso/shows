import React from 'react';
import Router from 'react-router';

var { RouteHandler } = Router;

//Components
import Header from './components/header.js';
import Navigation from './components/navigation.js';

var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <RouteHandler/>
      </div>
    );
  }
});

export default App;
