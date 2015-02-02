var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, RouteHandler, Link } = Router;
// var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// var RouteHandler = Router.RouteHandler;

//Views
var Index = require('./views/index.js');
var List = require('./views/list.js');
var Map = require('./views/map.js');

//Components
var Header = require('./views/components/header.js');
var Navigation = require('./views/components/navigation.js');

var App = React.createClass({
  render: function () {
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
        <Route name="map" handler={Map} />
    </Route>
);

// var routes = (
//   <Route handler={App} path="/">
//     <DefaultRoute handler={Home} />
//     <Route name="about" handler={About} />
//     <Route name="users" handler={Users}>
//       <Route name="recent-users" path="recent" handler={RecentUsers} />
//       <Route name="user" path="/user/:userId" handler={User} />
//       <NotFoundRoute handler={UserRouteNotFound}/>
//     </Route>
//     <NotFoundRoute handler={NotFound}/>
//     <Redirect from="company" to="about" />
//   </Route>
// );

//Start app
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
