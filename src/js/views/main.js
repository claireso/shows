import React, {Component} from 'react';
//import Router from 'react-router';

//var { RouteHandler } = Router;

//Components
import Header from './components/header';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
       {this.props.children}
      </div>
    );
  }
};

export default App;
