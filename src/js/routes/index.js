import React from 'react';
import {Route, IndexRedirect} from 'react-router';

//var { Route, DefaultRoute, RouteHandler, Link, Redirect, NotFoundRoute } = Router;

//Views
import List from '../views/list';
import Favorites from '../views/favorites';
import App from '../views/main';

var routes = (
  <Route component={App} path="/">
    <IndexRedirect to="/list" />
    <Route path="list" component={List} />
    <Route path="favorites" component={Favorites} />
  </Route>
);

export default routes;
