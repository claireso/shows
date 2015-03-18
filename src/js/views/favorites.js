import React from 'react';
import Event from './components/event.js';

var Favoris = React.createClass({
  getInitialState() {
    return {data: []};
  },

  componentDidMount() {
    this.loadShows();
  },

  loadShows() {
    var fav = localStorage.getItem('shows');

    if (fav) {
      fav = JSON.parse(fav);
      this.setState({'data': fav});
    }
  },

  render() {
    var eventNodes = this.state.data.map(function(event, index) {
      return (
          <Event key={index} data={event} afterClick={this.loadShows} />
      );
    }.bind(this));

    if(!eventNodes.length) {
      eventNodes = 'Vous n‘avez pas encore ajouté de favoris';
    }

    return (
      <div className="row event-list">
        {eventNodes}
      </div>
    );
  }
});

export default Favoris;
