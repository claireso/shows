import React from 'react';
import Router from 'react-router';

import routes from './routes/';

// import Dispatcher from './dispatcher/';

//Start app
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
