import React from 'react';
import Router from 'react-router';

var { Route, DefaultRoute, RouteHandler, Link, Redirect, NotFoundRoute } = Router;

//Views
import List from '../views/list.js';
import Favorites from '../views/favorites.js';
import App from '../views/main.js';

var routes = (
  <Route handler={App} path="/">
    <Route name="list" handler={List} />
      <Route name="list-paginate" path="/list/:page" handler={List} />
    <Route name="favorites" handler={Favorites} />
    <Redirect path="*" to="list" />
  </Route>
);

export default routes;
