var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, RouteHandler, Link } = Router;
// var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// var RouteHandler = Router.RouteHandler;

//Views
var List = require('./views/list.js');
var Favorites = require('./views/favorites.js');

//Components
var Header = require('./views/components/header.js');
var Navigation = require('./views/components/navigation.js');

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

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={List} />
    <Route name="list" handler={List} />
      <Route name="list-paginate" path="/list/:page" handler={List} />
    <Route name="favorites" handler={Favorites} />
  </Route>
);

//Start app
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
