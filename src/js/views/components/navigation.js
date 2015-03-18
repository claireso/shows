import React from 'react';
import {Link} from 'react-router';

var Navigation = React.createClass({
  render() {
    return (
      <div className="row">
        <nav className="nav">
          <ul>
            <li>
              <Link activeClassName="is-active" to="list">Liste</Link>
            </li>
            <li>
              <Link activeClassName="is-active" to="favorites">Favoris</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
});

export default Navigation;
