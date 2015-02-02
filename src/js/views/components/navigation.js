var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <ul>
          <li>
            <Link to="list">List</Link>
          </li>
          <li>
            <Link to="map">Map</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;
