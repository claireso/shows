var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

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

module.exports = Navigation;
