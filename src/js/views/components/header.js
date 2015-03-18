import React from 'react';

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div className="row">
          <h1 className="header__title">Prochains concerts</h1>
          <p>
            Liste des concerts à venir sur Paris
          </p>
        </div>
      </div>
    );
  }
});

export default Header;
